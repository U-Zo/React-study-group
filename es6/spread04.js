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
  ...objectOne,
  ...objectTwo,
};
console.log(combined);

var combined = {
  ...objectTwo,
  ...objectOne,
};
// 이미 키가 존재할 경우 덮어씌우지 않음
console.log(combined);

var { other, ...others } = combined;
console.log(other);
console.log(others);
