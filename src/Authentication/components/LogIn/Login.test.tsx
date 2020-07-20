import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LoginPage } from '.'

describe('LoginPage', () => {
   it('should render typed username', () => {
      const username = 'test-user'
      const { getByTestId } = render(<LoginPage userName={username} />)
      const usernameField = getByTestId('username')
      expect(usernameField.value).toBe(username)
   })

   it('should render typed password', () => {
      const password = 'test-password'
      const { getByTestId } = render(<LoginPage password={password} />)
      const passwordField = getByTestId('password')
      expect(passwordField.value).toBe(password)
   })

   it('should render given error message', () => {
      const { getByText } = render(<LoginPage errorMessage='Network Error' />)
      getByText(/Network Error/i)
   })
})