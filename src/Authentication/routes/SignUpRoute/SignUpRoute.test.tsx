import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SignUpService from '../../services/SignUpAPI'
import SignUpStore from '../../stores/SignUpStore/SignUpStore'
import SignUpPage  from '../../components/SignUp/index'
import SignUpRoute from './SignUpRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('LogInRoute Tests', () => {
   let signUpService: SignUpService
   let signUpStore: SignUpStore

   beforeEach(() => {
      signUpService = new SignUpService()
      signUpStore = new SignUpStore(signUpService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute signUpStore={signUpStore} history={history} />
         </Router>
      )
      const logInButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.click(logInButton)
      getByText(/Please enter username/i)
   })

   it('should render password empty error message', () => {
      const { getByText, getByRole, getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <SignUpRoute signUpStore={signUpStore} history={history} />
         </Router>
      )
      const username = 'test-user'
      const usernameField = getByTestId('username')
      fireEvent.change(usernameField, { target: { value: username } })
      const logInButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.click(logInButton)
      getByText(/Please enter password/i)
   })
   // it('should render network error message',() =>)
   // {

   // }
})