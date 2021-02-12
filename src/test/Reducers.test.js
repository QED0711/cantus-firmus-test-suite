import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReducersTest from '../components/ReducersTest';


test("custom reducers are added to the `reducers` value", () => {

    const dom = render(<ReducersTest />)

    const reducerKeys = dom.container.querySelector("#reducerKeys").innerHTML;

    expect(!!reducerKeys.match("numReducer")).toBe(true);
    expect(!!reducerKeys.match("strReducer")).toBe(true);
})

test("Reducers are able to set the state", () => {
    const dom = render(<ReducersTest />);

    const [
        num1,
        num2, 
        str1,
        str2,
        
        num1Button,
        num2Button,
        str1Button,
        str2Button,
    ] = [
        dom.container.querySelector("#num1"),
        dom.container.querySelector("#num2"),
        dom.container.querySelector("#str1"),
        dom.container.querySelector("#str2"),
        
        dom.container.querySelector("#updateNum1"),
        dom.container.querySelector("#updateNum2"),
        dom.container.querySelector("#updateStr1"),
        dom.container.querySelector("#updateStr2")
    ]

    expect(num1.innerHTML).toEqual("0");
    expect(num2.innerHTML).toEqual("-1");
    expect(str1.innerHTML).toEqual("Hello, world");
    expect(str2.innerHTML).toEqual("I'm nested one level");

    fireEvent.click(num1Button);
    fireEvent.click(num2Button);
    fireEvent.click(str1Button);
    fireEvent.click(str2Button);

    // check updated states
    expect(num1.innerHTML).toEqual("1");
    expect(num2.innerHTML).toEqual("100");
    expect(str1.innerHTML).toEqual("New String 1");
    expect(str2.innerHTML).toEqual("New Nested String");
})

test("Reducer dispatchers return the updated state", () => {
    const dom = render(<ReducersTest />);

    fireEvent.click(dom.container.querySelector("#updateStateString"))

    waitFor(() => {
        let stateString;
        try{
            stateString = JSON.parse(dom.container.querySelector("#stateString").innerHTML)
        } catch(err){
            // will retry on next call
        }
        expect(stateString.ignoreMe).toBe("This is a new string")
    })



})

test("Reducer dispatchers are asynchronous", async () => {
    const dom = render(<ReducersTest />);

    fireEvent.click(dom.container.querySelector("#updateNum1Multiple"));

    waitFor(() => {
        const num1 = dom.container.querySelector("#num1").innerHTML;
        expect(num1).toEqual("3")
    })

    

    
})