const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');

module.exports = function (config) {
  // Plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName]);
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
