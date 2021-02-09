import { render, screen } from '@testing-library/react';
import StateTest from '../components/StateTest';

test("Retrieves correct values from state", () => {
    const dom = render(<StateTest/>)

    const stateNum1 = dom.container.querySelector("#state-num1").innerHTML 
    const stateStr1 = dom.container.querySelector("#state-str1").innerHTML
    
    expect(stateNum1).toEqual("0")
    expect(stateStr1).toEqual("Hello, world")
})

test("Dynamic getters are correctly associated with state values", () => {
    const dom = render(<StateTest/>)

    const gettersNum1 = dom.container.querySelector("#getters-num1").innerHTML 
    const gettersStr1 = dom.container.querySelector("#getters-str1").innerHTML
    
    expect(gettersNum1).toEqual("0")
    expect(gettersStr1).toEqual("Hello, world")
})

test("Nested dynamic getters are correctly associated with state values", () => {
    const dom = render(<StateTest/>)

    const nestedNum2 = dom.container.querySelector("#nested-num2").innerHTML
    const nestedStr2 = dom.container.querySelector("#nested-str2").innerHTML

    expect(nestedNum2).toEqual("-1")
    expect(nestedStr2).toEqual("I'm nested one level")

})

test("Ignored getters are not included in the `getters` object", () => {
    const dom = render(<StateTest/>)

    const getterKeys = dom.container.querySelector("#getterKeys").innerHTML

    expect(!!getterKeys.match("getIgnoreMe")).toBe(false)
    expect(!!getterKeys.match("getNested_ignoreMeToo")).toBe(false)
})