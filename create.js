var arr = '1+22+333';
// ['1', '22', '333'];
var DELIMETER = '+';
var i = 0;
var result = [];
var accumulator = '';

while (i < arr.length) {
  if (arr[i] != DELIMETER) {
    accumulator +=  arr[i];
  }else{
    result[result.length] = accumulator;
    accumulator = '';
  }
  i++;
}
if (accumulator != '') {
  result[result.length] = accumulator;
}
alert('Your array is: ' + result);








// var arr = [];
// var coma =',';
// var i = 0;
// var input = prompt('Input your array with separating every element by coma');
// while (i < input.length ) {
// if (input[i] == coma) {
//   arr[i] = input[i];
//   i++;
// }
// }
// alert('Your array is: ' + arr);
