import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   clearUserSession
} from '../../../utils/StorageUtils'
import SignUpService from '../../services/SignUpAPI'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
class SignUpStore {
   static userSignOut() {
      throw new Error("Method not implemented.")
   }
   static userSignUP(username: string, password: string) {
      throw new Error("Method not implemented.")
   }
   static userSignUp(username: string, password: string) {
      throw new Error("Method not implemented.")
   }
   @observable getUserSignUpAPIStatus!: APIStatus
   @observable getUserSignUpAPIError!: string | null
   signUpAPIService: SignUpService
   static getUserSignUpAPIStatus: any
   static getUserSignUpAPIError: any

   constructor(signUpAPIService: SignUpService) {
      this.signUpAPIService = signUpAPIService
      this.init()
   }

   @action.bound
   init() {
      this.getUserSignUpAPIStatus = API_INITIAL
      this.getUserSignUpAPIError = null
   }

   @action.bound
   userSignUp(username: string, password: string) {
      const requestObject = {
         username: username,
         password: password
      }
      const loginPromise = this.signUpAPIService.signUpAPI(requestObject)

      return bindPromiseWithOnSuccess(loginPromise)
         .to(this.setGetUserSignUpAPIStatus, this.setUserSignUpAPIResponse)
         .catch(this.setGetUserSignUpAPIError)
   }

   @action.bound
   setUserSignUpAPIResponse(signUpResponse) {
      setAccessToken(signUpResponse.access_token)
   }

   @action.bound
   setGetUserSignUpAPIError(error) {
      this.getUserSignUpAPIError = error
   }

   @action.bound
   setGetUserSignUpAPIStatus(apiStatus) {
      this.getUserSignUpAPIStatus = apiStatus
   }

   @action.bound
   userSignOut() {
      clearUserSession()
      this.init()
   }
}

export default SignUpStore