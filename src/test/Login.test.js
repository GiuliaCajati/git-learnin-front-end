import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen, cleanup } from './test-utils'
import userEvent from '@testing-library/user-event'
import Login from '../containers/Login'
import { useSelector } from "react-redux"
import { fireEvent } from '@testing-library/react'


beforeEach(() => {
   
    render(<Login />)
    
});

afterEach(() => {
    cleanup()
});

test('Checking that login component renders properly', () => {
    //before action takes care of this test. 
})

// test('Checking that login component matches snapshot', () => {
//     const div = document.createElement('div')
//     const component = render(<Login />, div)
//     expect(component.container).toMatchSnapshot()
// })

test('Component has a form', () => {
    const login = screen.getByTestId('Login')
    expect(login).toContainHTML('form')
})

test('Submit button works', () => {
    const button = screen.getByTestId('loginSubmit')
    expect(button).toHaveAttribute('type', 'submit')
})

    

test("check to see if fields can be populated", async () => {
    const usernameField = screen.getByTestId("usernameField")
    const passwordField = screen.getByTestId("passwordField")

    // await userEvent.type(usernameField, "nugget@gmail.com")
    await fireEvent.change(usernameField, { target: { value: "nugget@gmail.com" } })
    await fireEvent.change(passwordField, { target: { value: "nugget" } })
    // await userEvent.type(passwordField, "nugget")
    
    expect(usernameField).toHaveValue("nugget@gmail.com")
    expect(passwordField).toHaveValue("nugget")

})

// test('Fetch returns a user', async () => {
//     const button = screen.getByTestId('loginSubmit')
//     const user = useSelector(state => state.user)

//     expect(user).toBe(null)

//     await userEvent.click(button)

//     expect(user).not.toBe(null)
// })

// test('Test for state change', () => {

// })

