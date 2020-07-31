import { create } from 'apisauce'
import getWashingMachinesDetails from '../fixtures/getWashingMachinesDetails.json'
import AdminServiceInterface from '.'
import { resolveWithTimeout } from '../utils/TestUtils'
class AdminService implements AdminServiceInterface {
   getWashingMachinesAPI = () => {
      return resolveWithTimeout(getWashingMachinesDetails)
   }
}
export default AdminService
