import { observable } from 'mobx'
import { WashingMachinesObj } from '../types'
class WashingMachinesModel {
   @observable WashingMachineId!: number
   @observable WashingMachineImage!: string
   @observable IsActive!: boolean

   constructor(obj: WashingMachinesObj) {
      this.WashingMachineId = obj.WashingMachineId
      this.WashingMachineImage = obj.WashingMachineImage
      this.IsActive = obj.IsActive
   }
}

export default WashingMachinesModel
