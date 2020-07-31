import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import endpoints from './endpoints'
import Config from '../../common/EnvironmentalConstants'
import AdminServiceInterface from './index'
class AdminService implements AdminServiceInterface {
   api
   constructor() {
      this.api = create({
         baseURL: 'http://bfa40637e0f5.ngrok.io/api/auth_app/',
      })
   }

   getWashingMachinesAPI = () => {
      return networkCallWithApisauce(
         this.api,
         endpoints.login.access_key,
         apiMethods.post
      )
   }
}
export default AdminService
