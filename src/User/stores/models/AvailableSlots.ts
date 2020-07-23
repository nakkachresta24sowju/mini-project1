//import Post from './post'
import { observable } from 'mobx'
import { AvailableSlotsObj,SlotsType} from '../types'
class AvailableSlots {
   @observable Date:string = ''
   @observable Slots !:Array<SlotsType> 
   
   constructor(obj:AvailableSlotsObj)
   {
   this.Date = obj.Date;
   this.Slots = obj.Slots;
   }
   
}

export default AvailableSlots