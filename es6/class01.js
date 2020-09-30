// 기존 자바스크립트

// Shape class 생성자 정의
function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

// Shape class static 함수 선언
Shape.create = function (x, y) {
  return new Shape(x, y);
};

// Shape class 인스턴스 함수 선언
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.area = function (x, y) {
  return 0;
};

var s = new Shape(0, 0);
console.log(s.area());

// Shape class 상속, Circle class 생성자 정의
function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}

// Circle prototype 객체에 Shape prototype과 area 함수를 담은 객체 덮어씌움
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});

var c = new Circle(0, 0, 10);
console.log(c.area());
