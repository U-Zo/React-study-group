// var
// 변수, 호이스팅에 영향을 받고 함수 스코프다.
// 여러 번 선언할 수 있다.
// function {var => 함수 안에서만 사용 가능}
// function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//
//   var i = 2;
//   console.log(i); -> 2;
//   var i = 1; -> 자바에서는 같은 이름으로 선언을 할 수 없음
//   console.log(i); -> 1;
// }

// let과 const는 자바랑 똑같이 블록 스코프며, 같은 이름으로 선언 불가.
// {} 이 블록 안에서 선언되면 안에서만 사용 가능
let num = 1;
num = num * 3;
console.log(num);

let str = '문자';
str = '다른 문자';
console.log(str);

let arr = [];
arr = [1, 2, 3];
console.log(arr);

let obj = {};
obj = { name: '새 객체' };
console.log(obj);
