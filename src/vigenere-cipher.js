const CustomError = require("../extensions/custom-error");

let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

class VigenereCipheringMachine {
  constructor(trueOrFalse = true) {
    this.trueOrFalse = trueOrFalse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");

    for (let i = 0, j = 0; i < message.length; i++) {
      if (ABC.indexOf(message[i]) != -1) {
        message[i] =
          ABC[(ABC.indexOf(message[i]) + ABC.indexOf(key[j])) % ABC.length];
        j = ++j % key.length;
      }
    }
    return this.trueOrFalse ? message.join("") : message.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }

    key = key.toUpperCase().split("");
    encryptedMessage = encryptedMessage.toUpperCase().split("");

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (ABC.indexOf(encryptedMessage[i]) != -1) {
        encryptedMessage[i] =
          ABC[
            (ABC.indexOf(encryptedMessage[i]) +
              ABC.length -
              ABC.indexOf(key[j])) %
              ABC.length
          ];
        j = ++j % key.length;
      }
    }
    return this.trueOrFalse
      ? encryptedMessage.join("")
      : encryptedMessage.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
