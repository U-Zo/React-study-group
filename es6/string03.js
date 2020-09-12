var cart = { name: '독서', price: 1500 };
var getTotal = function (cart) {
  return cart.print + '원';
};

var MyCart =
  '장바구니에 ' +
  cart.name +
  '가 있습니다. 총 금액은 ' +
  getTotal(cart) +
  '입니다.';
