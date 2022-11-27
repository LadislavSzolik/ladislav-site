const lessons = require("./src/_includes/shortcodes/lessons");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/assets/robots.txt": "robots.txt" });

  eleventyConfig.addPairedNunjucksShortcode("lessons",lessons);
  /*
  eleventyConfig.addNunjucksShortcode("activities", (activities) => `
  <section class="max-w-4xl px-4">
        <h2 class="text-4xl sm:text-6xl font-semibold text-center mb-6 sm:mb-8">Activities</h2>
        <div class="flex flex-wrap justify-center gap-2 text-sm sm:text-base">
            ${activities.map((activity)=> `<p class="py-2 px-6 bg-sky-100 text-blue-800 rounded-3xl shrink-0">${activity}</p>`)}
        </div>
    </section>
  `)*/

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
