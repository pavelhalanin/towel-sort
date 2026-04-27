module.exports = function towelSort(matrix) {
  if (!matrix) {
    return [];
  }

  let resultArray = [];

  matrix.forEach((element, index) => {
    if (index % 2 === 0) {
      resultArray = resultArray.concat(element);
    } else {
      resultArray = resultArray.concat(element.reverse());
    }
  });

  return resultArray;
};
