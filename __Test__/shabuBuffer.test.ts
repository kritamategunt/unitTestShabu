import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { bufferDiscount } from "../shabuBuffer";

describe("cal shabu", () => {
  const mock = new MockAdapter(axios);

  test.each([
    {
      num: 1,
      pricePerHead: 340,
      expectedResult: 374,
    },
    {
      num: 2,
      pricePerHead: 340,
      expectedResult: 748,
    },
    {
      num: 3,
      pricePerHead: 340,
      expectedResult: 1122,
    },
    {
      num: 4,
      expectedResult: 1122,
      pricePerHead: 340,
    },
    {
      num: 5,
      expectedResult: 1870,
      pricePerHead: 340,
    },
    {
      num: 6,
      expectedResult: 2244,
      pricePerHead: 340,
    },
    {
      num: 7,
      expectedResult: 2618,
      pricePerHead: 340,
    },
    {
      num: 8,
      expectedResult: 2244,
      pricePerHead: 340,
    },
  ])("should get sum price", async ({ num, expectedResult }) => {
    mock.onGet("/discountBuffer").reply(200, {
      statusCode: 1,
      status: "success",
      data: {
        price: 340,
        serviceChange: 10,
      },
    });
    expect(await bufferDiscount(num)).toBe(expectedResult);
  });
});
