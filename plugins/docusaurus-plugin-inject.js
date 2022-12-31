/** @type {import('@docusaurus/types').Plugin} */
function headPlugin(_context, options) {
  return {
    name: "plugin-inject",
    injectHtmlTags() {
      return options;
    }
  };
}

module.exports = headPlugin;
