import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   setAccessToken,
   clearUserSession
} from '../../../utils/StorageUtils'
//import LoginService from '../../services/LoginAPI'
import LoginService from '../../services/LoginFixture'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
class LogInStore {
   @observable getUserLogInAPIStatus!: APIStatus
   @observable getUserLogInAPIError!: string | null
   loginAPIService: LoginService
   role !:string

   constructor(loginAPIService: LoginService) {
      this.loginAPIService = loginAPIService
      this.init()
   }

   @action.bound
   init() {
      this.getUserLogInAPIStatus = API_INITIAL
      this.getUserLogInAPIError = null
   }

   @action.bound
   userLogIn(username: string, password: string) {
      const requestObject = {
         username: username,
         password: password
      }
      const loginPromise = this.loginAPIService.logInAPI(requestObject)
      console.log(requestObject)
      return bindPromiseWithOnSuccess(loginPromise)
         .to(this.setGetUserLogInAPIStatus, this.setUserLogInAPIResponse)
         .catch(this.setGetUserLogInAPIError)
   }

   @action.bound
   setUserLogInAPIResponse(loginResponse) {
      if(loginResponse.is_admin === false)
      {
         this.role = "User"       
      }
      else 
      {
         this.role="Admin"
      }
      
      setAccessToken(loginResponse.access_token)
   }

   @action.bound
   setGetUserLogInAPIError(error) {
      this.getUserLogInAPIError = error
   }

   @action.bound
   setGetUserLogInAPIStatus(apiStatus) {
      this.getUserLogInAPIStatus = apiStatus
   }

   @action.bound
   userLogOut() {
      clearUserSession()
      this.init()
   }
}

export default LogInStore