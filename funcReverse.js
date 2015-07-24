function reverseArray(array) {
  var arrNew = [];
  var len = array.length;

  for (var i = 0;i<len;i++) {
    var now = array[i];
    arrNew.unshift(now);
  }
  return arrNew;
}

console.log(reverseArray(["A", "B", "C"]));

// → ["C", "B", "A"];
//var arrayValue = [1, 2, 3, 4, 5];
//reverseArrayInPlace(arrayValue);
//console.log(arrayValue);
// → [5, 4, 3, 2, 1]
