import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { bufferDiscount } from "../shabuBuffer"

describe('testing shabuBuffer',()=> {

    var mock = new MockAdapter(axios)
    //POST discount

    it("1 should get 374",()=>{
        const expected = 374

        const result = bufferDiscount(1,340)

        expect(result.result).toBe(expected)
    })
    it("2 should get 748",()=>{
        const expected = 748

        const result = bufferDiscount(2,340)

        expect(result.result).toBe(expected)
    })
    it("3 should get 1,122",()=>{
        const expected = 1122

        const result = bufferDiscount(3,340)

        expect(result.result).toBe(expected)
    })
    it("4 should get 1,122",()=>{
        const expected = 1122

        const result = bufferDiscount(4,340)

        expect(result.result).toBe(expected)
    })
    it("5 should get 1,870",()=>{
        const expected = 1870

        const result = bufferDiscount(5,340)

        expect(result.result).toBe(expected)
    })
    it("6 should get 2,244",()=>{
        const expected = 2244

        const result = bufferDiscount(6,340)
        console.log(result)

        expect(result.result).toBe(expected)
    })
    it("7 should get 2,618",()=>{
        const expected = 2618

        const result = bufferDiscount(7,340)
        console.log(result)

        expect(result.result).toBe(expected)
    })
    it("8 should get 2,224",()=>{
        const expected = 2244

        const result = bufferDiscount(8,340)
        console.log(result)

        expect(result.result).toBe(expected)
    })
    
})