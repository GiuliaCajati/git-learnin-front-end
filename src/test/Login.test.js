import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from './test-utils'
import {cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../containers/Login'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'





beforeEach(() => {
   
    render(<Login />, { initialState: { user: null } })
    
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

})

test('Test for state change', () => {

})
