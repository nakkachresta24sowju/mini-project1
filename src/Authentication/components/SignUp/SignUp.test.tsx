import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SignUpPage } from '.'

describe('LoginPage', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByTestId } = render(<SignUpPage userName={username} />)
      const usernameField = getByTestId('username')
      expect(usernameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByTestId } = render(<SignUpPage password={password} />)
      const passwordField = getByTestId('password')
      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(<SignUpPage errorMessage='Network Error' />)
      getByText(/Network Error/i)
   })
})