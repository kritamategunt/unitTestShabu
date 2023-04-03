export function bufferDiscount(qty: number, pricePerHead: number) {
  let result;
  let getDiscount: number = 0;
  let serviceChange = 10 / 100;
  let discountTime = qty;
  let net = pricePerHead * serviceChange;
  let total = 0
  if (qty % 4 == 0) {
    getDiscount++;
    discountTime = qty / 4;
    total = (pricePerHead + net) * (qty-discountTime);
  }else{
    total = (pricePerHead + net) * qty;
  }
  //qty = qty - getDiscount;

  result = { status: 200, result: total ,netPerHead: pricePerHead+net,};
  console.log(result);
  return result;
}


// ## Shabu buffet

// ค่าบริการร้านชาบู หัวละ 340 ต่อคน แต่หากมา 4 คน จะจ่ายในราคา 3 คน (มา 4 จ่าย 3) และ มีค่าบริการ service charge 10% ต่อหัว

// | person | net   |
// | -----: | ----- |
// |      1 | 374   |
// |      2 | 748   |
// |      3 | 1,122 |
// |      4 | 1,122 |
// |      5 | 1,870 |
// |      6 | 2,244 |
// |      7 | 2,618 |
// |      8 | 2,244 |
// @kritamategunt
 
