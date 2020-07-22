import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import getUserLoginResponse from '../fixtures/getUserLoginResponse.json'
import endpoints from './endpoints'
import Config from '../../common/EnvironmentalConstants'
import LogInServiceInterface from '../services/index'
class LogInService implements LogInServiceInterface{
   api
   constructor() {
      this.api = create({
         baseURL: 'http://bfa40637e0f5.ngrok.io/api/auth_app/'
      })
      console.log(Config.envKey)
   }
   
   logInAPI = (request) => {
      return networkCallWithApisauce(
         this.api,
         endpoints.login.access_key,
         request,
         apiMethods.post
      )
   }
}
export default LogInService