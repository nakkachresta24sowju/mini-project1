import { observable } from 'mobx'
import {PreviousSlotsType} from '../types'
class PreviousSlots {
   @observable TotalSlotsCount !: number
   @observable Slots !:Array<Record<string, any>> 
   constructor(obj:PreviousSlotsType)
   {
   this.TotalSlotsCount = obj.TotalSlotsCount;
   this.Slots = obj.Slots;
   }
}

export default PreviousSlots