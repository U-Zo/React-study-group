var array1 = ['one', 'two'];
console.log(array1);
var array2 = ['three', 'four'];
console.log(array2);
var combined = [array1[0], array1[1], array2[0], array2[1]];
console.log(combined);
var combined = array1.concat(array2); // 배열에다가 다른 배열 붙이는 것
console.log(combined);
var combined = [].concat(array1, array2); // 빈 배열을 만들어서 다른 arr1, arr2를 붙임
console.log(combined);
var first = array1[0];
console.log(first);
var second = array1[1];
console.log(second);
var three = array1[2] || 'empty'; // || 연산자는 참이면 앞, 거짓이면 뒤
console.log(three);
function func() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  var first = args[0];
  console.log(first);
  var others = args.slice(1, 4);
  // 첫번째 인자는 시작 index, 두번째 인자는 끝 번째
  console.log(others);
}

func('one', 'two', 'three', 'four');
