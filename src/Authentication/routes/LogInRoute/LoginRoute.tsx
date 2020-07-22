import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import { History } from 'history'
import LoginStore from '../../stores/LogInStore/LoginStore'
import {
   getAccessToken,
   clearUserSession
} from '../../../utils/StorageUtils'
import {LoginPage }from '../../components/LogIn/index'
import {ADMIN_HOME_PAGE,USER_HOME_PAGE} from '../../../common/constants/routeConstants'
interface LogInRouteProps {
   history: History
   logInStore: LoginStore
}

@inject('logInStore')
@observer
class LogInRoute extends React.Component<LogInRouteProps> {
   @observable username: string = ''
   @observable password: string = ''
   @observable errorMessage: string = ''

   onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.username = event.target.value
   }
   onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.password = event.target.value
   }

   onClickLogIn = async () => {
      const { history, logInStore } = this.props
      history.push(USER_HOME_PAGE)
      if (
         this.username !== undefined &&
         this.password !== undefined &&
         logInStore.getUserLogInAPIError === null
      ) {
         
         await logInStore.userLogIn(this.username, this.password)
         
          if (this.username === '' || this.username === undefined) {
            this.errorMessage = 'Please enter username'
         } else if (this.password === '' || this.password === undefined) {
            this.errorMessage = 'Please enter password'
         }
         else if (getAccessToken() && logInStore.role === "Admin") {
            console.log(logInStore.role,55555)
            this.errorMessage = ''
            history.push(ADMIN_HOME_PAGE)
            
         } 
         else if (getAccessToken() && logInStore.role === "User") {
            console.log(logInStore.role,11111111)
            this.errorMessage = ''
            history.push(USER_HOME_PAGE)
            
         } 
      
         else {
            this.errorMessage = 'Network Error'
         }
      } else if (logInStore.getUserLogInAPIError) {
         
         this.errorMessage = 'Network Error'
      } 
   }
   render() {
      
      return (
         <LoginPage
            userName={this.username}
            onChangeUsername={this.onChangeUsername}
            password={this.password}
            onChangePassword={this.onChangePassword}
            onClickLogIn={this.onClickLogIn}
            errorMessage={this.errorMessage}
         />
      )}
   
}

export default withRouter(LogInRoute)



