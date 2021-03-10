const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = "";

  if (Array.isArray(members)) {
    members.forEach((word) => {
      if (typeof word == "string") {
        team = team + word.replace(/\s+/g, "").charAt(0);
      }
    });
    upTeam = team.toUpperCase;
    return team.toUpperCase().split("").sort().join("");
  } else return false;
};
