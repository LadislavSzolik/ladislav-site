const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const Image = require('@11ty/eleventy-img');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const {DateTime} = require('luxon');
const htmlmin = require('html-minifier');
const critical = require('critical');

const buildDir = 'dist';
const isHomePage = (outputPath) => outputPath === `${buildDir}/index.html`;
process.setMaxListeners(Infinity);

const shouldTransformHTML = (outputPath) =>
  outputPath &&
  outputPath.endsWith('.html') &&
  process.env.ELEVENTY_ENV === 'production';

module.exports = function (config) {
  // Plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);

  // Filters

  config.addFilter('dateToFormat', function (date, format) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toFormat(String(format));
  });

  config.addFilter('dateToISO', function (date) {
    return DateTime.fromJSDate(date, {zone: 'utc'}).toISO({
      includeOffset: false,
      suppressMilliseconds: true
    });
  });

  config.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Transforms

  config.addTransform('htmlmin', function (content, outputPath) {
    if (shouldTransformHTML(outputPath)) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  config.addTransform('critical', async function (content, outputPath) {
    if (shouldTransformHTML(outputPath) && isHomePage(outputPath)) {
      try {
        const config = {
          base: `${buildDir}/`,
          html: content,
          inline: true,
          width: 1280,
          height: 800
        };
        const {html} = await critical.generate(config);
        return html;
      } catch (err) {
        console.error(err);
      }
    }
    return content;
  });

  // Shortcodes

  config.addNunjucksAsyncShortcode('image', async function (src, alt, sizes) {
    let metadata = await Image(src, {
      widths: [480, 700],
      formats: [null],
      urlPath: '/assets/images/',
      outputDir: './src/assets/images'
    });

    let imageAttributes = {
      alt,
      sizes,
      loading: 'lazy',
      decoding: 'async'
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Watch sass folder for changes
  config.addWatchTarget('./src/assets');

  // Markdown
  config.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true
    }).use(markdownItAnchor, {
      permalink: true,
      permalinkClass: 'direct-link',
      permalinkSymbol: '#'
    })
  );

  // Layouts
  config.addLayoutAlias('base', 'base.njk');
  config.addLayoutAlias('post', 'post.njk');

  // Pass-through files
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('src/site.webmanifest');
  config.addPassthroughCopy('src/assets/images');
  config.addPassthroughCopy('src/assets/fonts');
  config.addPassthroughCopy('src/assets/icons');

  config.setDataDeepMerge(true);

  // Base Config
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
