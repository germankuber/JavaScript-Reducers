var data = [1,2,3];

var reducer = (accumulator, item)=> accumulator + item;

var initialValue = 0;

var total = data.reduce(reducer,initialValue);

console.log(total);