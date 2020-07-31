export interface AdminWashingMachinesType {
   WashingMachines: Array<WashingMachinesObj>
}
export interface WashingMachinesObj {
   WashingMachineId: number
   WashingMachineImage: string
   IsActive: boolean
}
