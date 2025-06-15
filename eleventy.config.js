import markdownIt from 'markdown-it';
import {DateTime} from 'luxon';
import {Features, transform} from 'lightningcss';

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy("src/assets/icons" );
  eleventyConfig.addPassthroughCopy({ "src/assets/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/assets/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/assets/default.css": "assets/default.css" });

  eleventyConfig.addBundle('css', { transforms: [
      (content) => {
        const targets = { future: 1 }; // enables draft syntaxes
        const result = transform({
          code: Buffer.from(content),
          minify: true,
          include: Features.Nesting,
          drafts: { customMedia: true },
          targets,
        });
        return result.code.toString('utf8');
      }
    ]
    , bundleHtmlContentFromSelector: "style", });


  const markdownItConfiguration = {
    html: true,
    typorapher: true
  };
  eleventyConfig.setLibrary("md", markdownIt(markdownItConfiguration));
  

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

   eleventyConfig.ignores.add('.DS_Store');


  return {
    dir: {
      input: "src",
      data: "_data",
      layouts: "_layouts",
      includes: "_includes",
    },
    templateFormats: ['njk','html', 'md', 'liquid'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
