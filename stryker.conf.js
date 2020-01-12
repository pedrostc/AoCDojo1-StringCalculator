module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: ["babel"],
    testFramework: "jest",
    coverageAnalysis: "off",
    babel: {
      optionsFile: '.babelrc', 
    }
  });
};
