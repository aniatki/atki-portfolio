const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });
    eleventyConfig.addFilter('isoDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj).toISODate();
    });
    eleventyConfig.addPassthroughCopy("assets");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    }
};



