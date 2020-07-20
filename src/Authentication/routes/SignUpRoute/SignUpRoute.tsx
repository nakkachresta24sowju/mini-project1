import React, { ClassicComponent } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { History } from 'history'
import SignUpStore from '../../stores/SignUpStore/SignUpStore'
import {
   getAccessToken,
   clearUserSession
} from '../../../utils/StorageUtils'
import SignUpPage from '../../components/SignUp/index'

interface SignUpRouteProps {
   history: History
   signUpStore: SignUpStore
}

interface InjectedProps extends SignUpRouteProps {
   signUpStore: SignUpStore
}

@inject('signUpStore')
@observer
class SignUpRoute extends React.Component<SignUpRouteProps> {
   @observable username!: string
   @observable password!: string
   @observable errorMessage!: string
   @observable confirmPassword!:string

   onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.username = event.target.value
   }
   onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.password = event.target.value
   }
   onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.confirmPassword = event.target.value
   }

   onClickSignUp = async () => {
      const { history, signUpStore } = this.props
      if (
         this.username !== undefined &&
         this.password !== undefined &&
         signUpStore.getUserSignUpAPIError === null
      ) {
         await signUpStore.userSignUp(this.username, this.password)
         if (getAccessToken()) {
            history.push('/DashBoard')
            this.errorMessage = ''
         } else {
            this.errorMessage = 'Network Error'
         }
      } else if (signUpStore.getUserSignUpAPIError) {
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
         <SignUpPage
            userName={this.username}
            onChangeUserName={this.onChangeUsername}
            password={this.password}
            onChangePassword={this.onChangePassword}
            onChangeConfirmPassword={this.onChangeConfirmPassword}
            onClickSignUp={this.onClickSignUp}
            confirmPassword={this.confirmPassword}
            errorMessage={this.errorMessage}
         />
      )
   }
}

export default withRouter(SignUpRoute)