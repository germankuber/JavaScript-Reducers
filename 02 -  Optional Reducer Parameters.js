var data =[1,2,3,5,6,7,8];
function reducer(accumulator, item, index, array) {
  var tmpResult = accumulator + item;
  if (index == array.length - 1) return tmpResult / array.length - 1;
  return tmpResult;
}

console.log(data.reduce(reducer));