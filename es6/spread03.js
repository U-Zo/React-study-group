var objectOne = {
  one: 1,
  two: 2,
};
console.log(objectOne);

var objectTwo = {
  three: 3,
  four: 4,
};
console.log(objectTwo);

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
console.log(combined);

var combined = Object.assign({}, objectOne, objectTwo);
// Object.assign('합칠 객체', [...복사할 객체들])
// 이미 키의 값이 있는 경우 값 복사 x
console.log(combined);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1 }

var combined = Object.assign({}, objectTwo, objectOne);
console.log(combined);
// combine = { one: 1, two: 2, three: 3, four: 4, other: 0 }

var others = Object.assign({}, combined);
console.log(others);

delete others.other;
// delete 로 객체의 키 자체를 삭제함.
console.log(others);
