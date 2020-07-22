import { create } from 'apisauce'
import getAvailableSlots from '../fixtures/getAvailableSlots.json'
import getUpcomingSlots from '../fixtures/getUpcomingSlots.json'
import getAvailableSlotsResponse from '../fixtures/getAvailableSlotsResponse.json'
import UserServiceInterface from "."
import { resolveWithTimeout } from '../utils/TestUtils'

class UserService implements UserServiceInterface{
    
    getAvailableSlotsAPI = (request) => {
      // console.log(request,"available slots")
        return  resolveWithTimeout(getAvailableSlots)
     }

     getUpcomingSlotsAPI = () => {
      //  console.log(request,"upcoming slots")   
        return  resolveWithTimeout(getUpcomingSlots)
      }
}
export default UserService