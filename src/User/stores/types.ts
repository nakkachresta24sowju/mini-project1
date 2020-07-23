export interface AvailableSlotsType {
    AvailableSlots:Array<AvailableSlotsObj>
 }
 export interface AvailableSlotsObj{
    Slots: Array<SlotsType>,
    Date:string
 }
 export interface SlotsType{
    Id: number,
    StartTime: string,
    EndTime: string,
    IsAvalible: boolean
 }
 export interface UpcomingSlotsType{
   UpcomingSlots:Array<UpcomingSlotsObj>
 }
 export interface UpcomingSlotsObj
 {
    Date: string,
    SlotId : number,
    WashingMachineId: number,
    StartTime: string,
    EndTime:string
 }
 export interface PreviousSlotsType {
     Slots:Array<Record<string, any>>
     TotalSlotsCount:number
 }
 export interface AvailableSlotsResponseType
 {
     SlotId:number
 }