const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  matrix.forEach(myFunction);

  function myFunction(item) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === "^^") {
        result++;
      }
    }
  }
  return result;
};
