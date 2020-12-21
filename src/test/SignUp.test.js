import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, cleanup } from './test-utils'
import userEvent from '@testing-library/user-event'
import SignUp from '../containers/SignUp'
import { useSelector } from "react-redux"
import { fireEvent } from '@testing-library/react'

beforeEach(() => {
    render(<SignUp />)
});

afterEach(() => {
    cleanup()
});

test('Checking that SignUp component renders properly', () => {
    //before action takes care of this test. 
})

test('Component has a form', () => {
    const SignUp = screen.getByTestId('SignUp')
    expect(SignUp).toContainHTML('form')
})

test('Submit button works', () => {
    const button = screen.getByTestId('signUpSubmit')
    expect(button).toHaveAttribute('type', 'submit')
})

test("check to see if fields can be populated", async () => {
    const usernameInput = screen.getByTestId("usernameInput")
    const passwordInput = screen.getByTestId("passwordInput")

    await fireEvent.change(usernameInput, { target: { value: "nugget@gmail.com" } })
    await fireEvent.change(passwordInput, { target: { value: "nugget" } })
    
    expect(usernameInput).toHaveValue("nugget@gmail.com")
    expect(passwordInput).toHaveValue("nugget")

})
