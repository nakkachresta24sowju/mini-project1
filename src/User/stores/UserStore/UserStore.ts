import React from 'react'
import { observable, action, computed, toJS } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { setAccessToken } from '../../../utils/StorageUtils'
import { observer } from "mobx-react"
import UserService from '../../services/UserFixture'
import getAvailableSlots from '../../fixtures/getAvailableSlots.json'
import AvailableSlots from "../models/AvailableSlots"
import UpcomingSlots from "../models/UpcomingSlots"
   class UserStore {
      @observable getAvailableSlotsAPIStatus!: APIStatus
      @observable getAvailableSlotsAPIError: string | null = null
      @observable getUpcomingSlotsAPIStatus !:APIStatus
      @observable getUpcomingSlotsAPIError :string | null = null
      @observable availableSlots !: Array<AvailableSlots>
      @observable upcomingSlots !: Array<UpcomingSlots>
      userAPIService: UserService
      
      constructor(userAPIService) {
         this.userAPIService = userAPIService
         this.init()
      }

      @action.bound
      init() {
         this.getAvailableSlotsAPIStatus = API_INITIAL,
         this.getAvailableSlotsAPIError = null,
         this.getUpcomingSlotsAPIError = null,
         this.getUpcomingSlotsAPIStatus = API_INITIAL
         
      }
     
   
      @action.bound
      getAvailableSlots(obj) {
         const userPromise = this.userAPIService.getAvailableSlotsAPI(obj)
         return bindPromiseWithOnSuccess(userPromise)
            .to(
               this.setGetAvailableSlotsAPIStatus,
               this.setAvailableSlotsResponse
            )
            .catch(this.setGetAvailableSlotsAPIError)
      }
   
      @action.bound
      setGetAvailableSlotsAPIStatus(apiStatus) {
         this.getAvailableSlotsAPIStatus = apiStatus
      }
   
      @action.bound
      setAvailableSlotsResponse(userservice) {
         
         this.availableSlots = userservice.AvailableSlots.map(obj => {
            return new AvailableSlots(obj)})
            console.log(this.availableSlots,555555)
      }
      @action.bound
      setGetAvailableSlotsAPIError(error) {
         this.getAvailableSlotsAPIError = error
      }
   
      @action.bound
      getUpcomingSlots() {
         const userPromise = this.userAPIService.getUpcomingSlotsAPI()
         
         return bindPromiseWithOnSuccess(userPromise)
            .to(
               this.setGetUpcomingSlotsAPIStatus,
               this.setUpcomingSlotsResponse
            )
            .catch(this.setGetUpcomingSlotsAPIError)
      }
      @action.bound
      setGetUpcomingSlotsAPIStatus(apiStatus) {
         this.getUpcomingSlotsAPIStatus = apiStatus
      }
   
      @action.bound
      setUpcomingSlotsResponse(userservice) {
        this.upcomingSlots = userservice.UpcomingSlots.map(obj => {return new UpcomingSlots(obj)})
      }
   
      @action.bound
      setGetUpcomingSlotsAPIError(error) {
         this.getUpcomingSlotsAPIError = error
      }
   
    //   //<==========================================================================>
   
    //   @action.bound
    //   getPreviousSlots() {
    //      const userPromise = this.userAPIService.getPreviousSlotsAPI()
    //      return bindPromiseWithOnSuccess(userPromise)
    //         .to(this.setGetPreviousSlotsAPIStatus, this.setPreviousSlotsResponse)
    //         .catch(this.setGetPreviousSlotsAPIError)
    //   }
    //   @action.bound
    //   setGetPreviousSlotsAPIStatus(apiStatus) {
    //      this.getPreviousSlotsAPIStatus = apiStatus
    //   }
   
    //   @action.bound
    //   setPreviousSlotsResponse(dashBoardAPIService) {
    //     //  this.domainDetailsDescription = new DomainDetails(
    //     //     dashBoardAPIService.description
    //     //  )
    //   }
    //   @action.bound
    //   setGetPreviousSlotsAPIError(error) {
    //      this.getPreviousSlotsAPIError = error
    //   }
    }
   
export default UserStore