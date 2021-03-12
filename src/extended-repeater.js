const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultChain = [];
  let defSeparator = "";
  let repeatElement = "";
  let addSeparator = "";
  let addRepeatTimes;

  if (!options) {
    resReturn = str;
    return resReturn;
  } else {
    !options.separator
      ? (defSeparator = "+")
      : (defSeparator = options.separator);

    !options.additionSeparator
      ? (addSeparator = "|")
      : (addSeparator = options.additionSeparator);

    if (options.hasOwnProperty("addition")) {
      !options.additionRepeatTimes
        ? (addRepeatTimes = 1)
        : (addRepeatTimes = options.additionRepeatTimes);

      for (let s = 0; s < addRepeatTimes; s++) {
        addRepeatTimes > 1 && s < addRepeatTimes - 1
          ? (repeatElement = repeatElement + options.addition + addSeparator)
          : (repeatElement = repeatElement + options.addition);
      }

      str = str + repeatElement;
    }
    if (!options.repeatTimes) {
      options.repeatTimes = 1;
    }
    for (let i = 0; i < options.repeatTimes; i++) {
      resultChain = [...resultChain, str];
    }
    resReturn = resultChain.join(defSeparator);
  }

  return resReturn;
};
