module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",      // where your source files live
      includes: "_includes",  // where layouts live
      output: "_site"    // where the built site goes
    },
  };
};
