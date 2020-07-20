import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Router, Route, withRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import LogInService from '../../services/LoginAPI'
import LogInStore from '../../stores/LogInStore/LoginStore'
import { LoginPage} from '../../components/LogIn/index'
import LogInRoute from './LoginRoute'

const LocationDisplay = withRouter(({ location }) => (
   <div data-testid='location-display'>{location.pathname}</div>
))

describe('LogInRoute Tests', () => {
   let logInService: LogInService
   let logInStore: LogInStore

   beforeEach(() => {
      logInService = new LogInService()
      logInStore = new LogInStore(logInService)
   })

   afterEach(() => {
      jest.resetAllMocks()
   })

   it('should render username empty error message', () => {
      const { getByText, getByRole } = render(
         <Router history={createMemoryHistory()}>
            <LogInRoute logInStore={logInStore} history={history} />
         </Router>
      )
      const logInButton = getByRole('button', { name: 'LOGIN' })

      fireEvent.click(logInButton)
      getByText(/Please enter username/i)
   })

   it('should render password empty error message', () => {
      const { getByText, getByRole, getByTestId } = render(
         <Router history={createMemoryHistory()}>
            <LogInRoute logInStore={logInStore} history={history} />
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