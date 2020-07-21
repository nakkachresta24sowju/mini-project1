import React, { ClassicComponent } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import LoginStore from '../../stores/LogInStore/LoginStore'
import {
   getAccessToken,
   clearUserSession
} from '../../../utils/StorageUtils'
import {LoginPage }from '../../components/LogIn/index'

interface LogInRouteProps {
   history: History
   logInStore: LoginStore
}

interface InjectedProps extends LogInRouteProps {
   logInStore: LoginStore
}

@inject('logInStore')
@observer
class LogInRoute extends React.Component<LogInRouteProps> {
   @observable username!: string
   @observable password!: string
   @observable errorMessage!: string

   onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.username = event.target.value
   }
   onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.password = event.target.value
   }

   onClickLogIn = async () => {
      const { history, logInStore } = this.props
      if (
         this.username !== undefined &&
         this.password !== undefined &&
         logInStore.getUserLogInAPIError === null
      ) {
         await logInStore.userLogIn(this.username, this.password)
         if (getAccessToken()) {
            history.push('/DashBoard')
            this.errorMessage = ''
         } else {
            this.errorMessage = 'Network Error'
         }
      } else if (logInStore.getUserLogInAPIError) {
         this.errorMessage = 'Network Error'
      } else {
         if (this.username === '' || this.username === undefined) {
            this.errorMessage = 'Please enter username'
         } else if (this.password === '' || this.password === undefined) {
            this.errorMessage = 'Please enter password'
         }
      }
   }
   render() {
      return (
         <LoginPage
            userName={this.username}
            onChangeUserName={this.onChangeUsername}
            password={this.password}
            onChangePassword={this.onChangePassword}
            onClickLogIn={this.onClickLogIn}
            errorMessage={this.errorMessage}
         />
      )
   }
}

export default withRouter(LogInRoute)