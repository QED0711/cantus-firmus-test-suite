import { render, screen } from '@testing-library/react';
import StateTest from '../components/StateTest';

test("Retrieves correct values from state", () => {
    render(<StateTest />);

    const num1 = screen.getByText(/0/);
    const str1 = screen.getByText(/hello, world/i)

    expect(num1).toBeInTheDocument()
    expect(str1).toBeInTheDocument()
})