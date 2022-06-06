const assertEqual = require('./assertEqual');

let head = function(array) {
  let firstElement = array.shift();
  return firstElement;
};

module.exports = head;