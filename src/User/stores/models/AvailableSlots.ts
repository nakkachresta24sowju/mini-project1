//import Post from './post'
import { observable } from 'mobx'
import { AvailableSlotsObj} from '../types'
class AvailableSlots {
   @observable Date:string = ''
   @observable Slots !:Array<Record<string, any>> 
   
   constructor(obj:AvailableSlotsObj)
   {
   this.Date = obj.Date;
   this.Slots = obj.Slots;
   console.log(obj,"avail slots model")
   }
   
}

export default AvailableSlots