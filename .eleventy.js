module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/assets/downloads": "downloads" });
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/assets/robots.txt": "robots.txt" });

  eleventyConfig.addPairedNunjucksShortcode(
    "lessonsLearned",
    (text) => `
        <div class="max-w-3xl mx-auto text-center bg-sky-100 rounded-2xl px-4 sm:px-7 py-4">
            <h3 class="font-semibold">Lessons learned</h3>
            <p>${text}</p>
        </div>
  `
  );

  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
