const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let times = 1;

    for (const item of arr) {
      if (Array.isArray(item)) {
        times = 1 + this.calculateDepth(item);
      }

      if (times > depth) {
        depth = times;
      }
    }
    return depth;
  }
};
