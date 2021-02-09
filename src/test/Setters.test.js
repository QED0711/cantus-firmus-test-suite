import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SettersTest from '../components/SettersTest';

test("Dynamic setters correctly set their linked state property", () => {
    const dom = render(<SettersTest />)

    fireEvent.click(screen.getByText("Single Update"))

    const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)

    expect(num1).toEqual(1)    
})

test("Custom setters can update state with `this.setState`", () => {
    const dom = render(<SettersTest />)

    fireEvent.click(dom.container.querySelector("#customSetterButton"))

    const str1 = dom.container.querySelector("#str1").innerHTML
    const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)

    expect(str1).toEqual("new string")
    expect(num1).toEqual(100)
})

test("`this.setState` is asynchronous", async () => {
    const dom = render(<SettersTest />)

    fireEvent.click(dom.container.querySelector("#asyncSetterButton"))
    
    await waitFor(() => {
        const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)
        expect(num1).toEqual(3)
    })
})

test("Dynamic setters are asynchronous", async () => {
    const dom = render(<SettersTest />)

    fireEvent.click(dom.container.querySelector("#asyncDynamicSetterButton"))

    await waitFor(() => {
        const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)
        expect(num1).toEqual(5)
    })
})

test("Dynamic nested setters set their linked state property", () => {
    const dom = render(<SettersTest />)

    fireEvent.click(dom.container.querySelector("#dynamicNestedSetter"))

    const nestedStr2 = dom.container.querySelector("#nestedStr2").innerHTML

    expect(nestedStr2).toEqual("Updated a nested value!")
})

test("No dynamic setters are created for state specified in the `ignoreSetters` array", () => {
    const dom = render(<SettersTest />)

    const setterKeys = dom.container.querySelector("#setterKeys").innerHTML
    
    expect(!!setterKeys.match("setIgnoreMe")).toBe(false);
    expect(!!setterKeys.match("setNested_ignoreMeToo")).toBe(false)
})