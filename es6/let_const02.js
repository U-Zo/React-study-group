// const는 불변 변수 -> 변할 수 없다.
// 즉, 값을 새로 대입할 수 없다.

const num = 1;
// num = 3;
// console.log(num);

const str = '문자';
// str = '새 문자';
// console.log(str);

const arr = [];
// arr = [1, 2, 3];
// console.log(arr);

const arr2 = [];
arr2.push(1);
console.log(arr2);
arr2.pop();
console.log(arr2);

const obj = { name2: '권준' };
// obj = { name: '내 이름' };
// console.log(obj);

const obj2 = {};
obj2['name'] = '내 이름';
// 객체의 키를 참조할 때는 객체이름['키 이름']
console.log(obj2);

Object.assign(obj2, obj);
console.log(obj2);

const str2 = '문자'; // -> 문자2 로 만들고 싶음
const arr3 = str2.split('').concat('2').join('');
// split('문자열') -> 문자열을 기준으로 문자열을 배열로 분리
// e.g.) '1,2,3,4'.split(',') -> [1, 2, 3, 4]
// 배열.concat(value) -> 배열 끝에 value를 추가
// e.g.) [1, 2, 3, 4].concat(5) -> [1, 2, 3, 4, 5]
// 배열.join('문자열') -> 배열값 사이에 문자열을 추가하여 문자열로 만듦
// e.g.) [1, 2, 3, 4].join(',') -> '1, 2, 3, 4'
console.log(arr3);
