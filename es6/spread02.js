var array1 = ['one', 'two'];
console.log(array1);
var array2 = ['three', 'four'];
console.log(array2);
const combined = [...array1, ...array2];
// const는 자바처럼 두 번 이상 초기화 안 됨.
console.log(combined);
const [first, second, three = 'empty', ...others] = array1;
// 구조 분해 할당은 배열의 순서대로 할당한다.
console.log(first);
console.log(second);
console.log(three);
console.log(others);

function func(...args) {
  var [first, ...others] = args;
  // others에는 할당하고 남은 값들을 저장
  console.log(first);
  console.log(others);
}

func('one', 'two', 'three', 'four');
