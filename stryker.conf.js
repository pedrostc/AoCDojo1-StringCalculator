module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "mocha",
    transpilers: ["babel"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    babel: {
      optionsFile: '.babelrc', 
    }
  });
};
