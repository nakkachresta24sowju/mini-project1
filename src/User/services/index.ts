import {AvailableSlotsType,UpcomingSlotsType,AvailableSlotsResponseType} from '../stores/types'

interface UserServiceInterface {
   getAvailableSlotsAPI : (request:AvailableSlotsResponseType) => Promise<AvailableSlotsType>
   getUpcomingSlotsAPI:() => Promise<UpcomingSlotsType>
}      

export default UserServiceInterface