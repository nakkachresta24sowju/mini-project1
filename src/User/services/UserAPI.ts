import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import endpoints from './endpoints'
import Config from '../../common/EnvironmentalConstants'
import UserServiceInterface from './index'
class UserService implements UserServiceInterface{
   api
   constructor() {
      this.api = create({
         baseURL: 'http://bfa40637e0f5.ngrok.io/api/auth_app/'
      })
      
   }
   
   getAvailableSlotsAPI = (request) => {
      return networkCallWithApisauce(
         this.api,
         endpoints.login.access_key,
         request,
         apiMethods.post
      )
   }
   getUpcomingSlotsAPI = () => {
   return networkCallWithApisauce(
      this.api,
      endpoints.login.access_key,
      apiMethods.post
   )
    }
}
export default UserService