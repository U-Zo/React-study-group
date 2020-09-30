class Shape {
  // Shape class 생성자 정의
  constructor(x, y) {
    this.name = 'Shape';
    this.move(x, y);
  }

  // Shape class static 함수 선언
  static create(x, y) {
    return new Shape(x, y);
  }

  // Shape class 인스턴스 함수 선언
  move(x, y) {
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

var s = new Shape(0, 0);
console.log(s.area());

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) return super.area();
    return this.radius * this.radius;
  }
}

var c = new Circle(0, 0, 10);
console.log(c.area()); // 100
