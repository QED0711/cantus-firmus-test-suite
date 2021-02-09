import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MethodsTest from '../components/MethodsTest';


// ============================ STANDARD METHODS ============================
test("Methods are bound to the provider and have access to the `this` keyword", () => {
    
    const dom = render(<MethodsTest />)

    const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)

    expect(num1).toEqual(0)

})

test("The `this` keyword in bound methods has access to state, setters, reducers, and constants", () => {
    const dom = render(<MethodsTest />)
    const tk = dom.container.querySelector("#thisKeyword").innerHTML

    expect(!!tk.match("state")).toBe(true)
    expect(!!tk.match("setters")).toBe(true)
    expect(!!tk.match("reducers")).toBe(true)
    expect(!!tk.match("constants")).toBe(true)
})

test("Methods can execute asynchronously", () => {
    const dom = render(<MethodsTest />)

    fireEvent.click(dom.container.querySelector("#methodsIncrementButton"))

    waitFor(() => {
        const num1 = parseInt(dom.container.querySelector("#num1").innerHTML)
        expect(num1.toEqual(2))
    })
})

// ============================ NAMESPACED METHODS ============================
test("Namespaced methods are passed individually in the provider value", () => {

    const dom = render(<MethodsTest />);
    
    const keys = dom.container.querySelector("#providerValueKeys").innerHTML
    
    expect(!!keys.match("someNamespacedMethods") && !!keys.match("otherNamespacedMethods")).toBe(true)
    
})

test("Namespaced methods are accessible via the `this` keyword in bound functions", () => {
    const dom = render(<MethodsTest />);

    const str1 = dom.container.querySelector("#str1").innerHTML;

    expect(str1).toEqual("Hello, world")

})