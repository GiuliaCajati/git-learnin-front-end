import React from 'react'
import ReactDOM from 'react-dom'
import {render, screen, cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../containers/Login'

beforeEach(() => {
    render(<Login />)
});

afterEach(() => {
    cleanup()
});

test('Checking that login component renders properly', () => {
    const div = document.createElement('div')
    const component = ReactDOM.render(<Login />, div)
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

test('Fetch returns a user', async () => {
    // expect.assertions(1);
    // const data = await functions.fetchUser()
    // expect(data.name).toEqual('Leanne Graham')
})

test('Test for state change', () => {

})
