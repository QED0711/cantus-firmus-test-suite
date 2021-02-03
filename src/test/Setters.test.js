import { render, screen, fireEvent } from '@testing-library/react';
import SettersTest from '../components/SettersTest';

test("Dynamic setters correctly set their linked state property", () => {
    render(<SettersTest />)

    fireEvent.click(screen.getByText("Single Update"))

    const updatedNum1 = screen.getByText(/1/)

    expect(updatedNum1).toBeInTheDocument()

    
})

test("Custom setters can update state with `this.setState`", () => {

})

test("`this.setState` is asynchronous", () => {

})

test("Dynamic nested setters set their linked state property", () => {
    
})