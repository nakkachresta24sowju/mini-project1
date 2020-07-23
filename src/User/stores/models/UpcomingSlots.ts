import { observable } from 'mobx'
import {UpcomingSlotsObj} from '../types'
class UpcomingSlots {
    @observable Date !: string 
    @observable SlotId !: number 
    @observable WashingMachineId !: number
    @observable StartTime !: string
    @observable EndTime !:string
   constructor(obj:UpcomingSlotsObj)
   {
    
   this.Date = obj.Date;
   this.SlotId = obj.SlotId;
   this.WashingMachineId =obj.WashingMachineId
   this.StartTime = obj.StartTime
   this.EndTime = obj.EndTime
  
   
   }
}

export default UpcomingSlots