import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import getUserLoginResponse from '../fixtures/getUserLoginResponse.json'
import endpoints from './endpoints'
import Config from '../../common/EnvironmentalConstants'

class SignUpService {
   api
   constructor() {
      this.api = create({
         baseURL: Config.envKey
      })
   }
   // baseURL: 'https://9ce065a0d7bf.ngrok.io/'
   signUpAPI = request => {
      return networkCallWithApisauce(
         this.api,
         endpoints.signin.access_key,
         request,
         apiMethods.post
      )
   }
}
export default SignUpService