import axios from "axios";

export async function bufferDiscount(qty: number) {
  const serviceShabu = await axios.get("/discountBuffer");
  let result;
  let serviceChange = serviceShabu.data.data.serviceChange;
  let pricePerHead  = serviceShabu.data.data.price;

  let discountTime = qty;
  let net = pricePerHead * serviceChange;
  let total;
  if (qty % 4 == 0) {
    discountTime = qty / 4;
    total = (pricePerHead + net/100) * (qty - discountTime);
  } else {
    total = (pricePerHead + net/100) * qty;
  }

  result = total
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
