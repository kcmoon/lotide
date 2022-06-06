const middle = function(arr1) {
  let middleArray = [];

  if (arr1.length > 2) {
    if (arr1.length % 2 !== 0) {
      let oddIndex = ((arr1.length - 1) / 2);
      middleArray.push(arr1[oddIndex]);
    }
    
    if (arr1.length % 2 === 0) {
      let evenIndex1 = Math.floor((arr1.length - 1) / 2);
      let evenIndex2 = Math.ceil((arr1.length - 1) / 2);
      middleArray.push(arr1[evenIndex1], arr1[evenIndex2]);
    }
  }
  return middleArray;
};

module.exports = middle;