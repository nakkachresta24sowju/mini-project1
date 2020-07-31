import React from 'react'
import { observable, action, computed, toJS } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { setAccessToken } from '../../../utils/StorageUtils'
import { observer } from 'mobx-react'
import AdminService from '../../services/AdminFixture'
import getWashingMachines from '../../fixtures/getWashingMachinesDetails.json'
import WashingMachinesModel from '../models/WashingMachineModel'

class AdminStore {
   @observable getWashingMachinesAPIStatus!: APIStatus
   @observable getWashingMachinesAPIError: string | null = null
   @observable washingMachinesList!: Array<WashingMachinesModel>
   adminAPIService: AdminService

   constructor(userAPIService) {
      this.adminAPIService = userAPIService
      this.init()
   }

   @action.bound
   init() {
      ;(this.getWashingMachinesAPIStatus = API_INITIAL),
         (this.getWashingMachinesAPIError = null)
   }

   @action.bound
   getWashingMachinesList() {
      const adminPromise = this.adminAPIService.getWashingMachinesAPI()

      return bindPromiseWithOnSuccess(adminPromise)
         .to(
            this.setGetWashingMachinesAPIStatus,
            this.setWashingMachinesResponse
         )
         .catch(this.setGetWashingMachinesAPIError)
   }

   @action.bound
   setGetWashingMachinesAPIStatus(apiStatus) {
      this.getWashingMachinesAPIStatus = apiStatus
   }

   @action.bound
   setWashingMachinesResponse(adminservice) {
      this.washingMachinesList = adminservice.WashingMachines.map((obj) => {
         return new WashingMachinesModel(obj)
      })
   }
   @action.bound
   setGetWashingMachinesAPIError(error) {
      this.getWashingMachinesAPIError = error
   }
}
export default AdminStore
