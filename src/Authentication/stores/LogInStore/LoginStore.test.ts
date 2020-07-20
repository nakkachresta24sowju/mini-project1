import Cookie from 'js-cookie'
import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'
import LogInService from  '../../services/LoginAPI'
import getUserLogInResponse from '../../fixtures/getUserLoginResponse.json'
import LogInStore from './LoginStore'
/*global jest*/
/*global expect */
let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()
Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('LogInStore Tests', () => {
   let logInService: LogInService
   let logInStore: LogInStore

   beforeEach(() => {
      logInService = new LogInService()
      logInStore = new LogInStore(logInService)
   })

   it('should test initialising login store', () => {
      expect(logInStore.getUserLogInAPIStatus).toBe(API_INITIAL)
      expect(logInStore.getUserLogInAPIError).toBe(null)
   })

   it('should test userLogInAPI data fetching state', () => {
      let requestObject = {
         username: 'sowjanya',
         password: 'sowju'
      }
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockLogInAPI = jest.fn()
      mockLogInAPI.mockReturnValue(mockLoadingPromise)
      logInService.logInAPI = mockLogInAPI
      logInStore.userLogIn(requestObject.username, requestObject.password)
      expect(logInStore.getUserLogInAPIStatus).toBe(API_FETCHING)
   })

   it('should test userLogInAPI success state', async () => {
      let requestObject = {
         username: 'sowjanya',
         password: 'sowju'
      }
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserLogInResponse)
      })
      const mockLogInAPI = jest.fn()
      mockLogInAPI.mockReturnValue(mockSuccessPromise)
      logInService.logInAPI = mockLogInAPI

      await logInStore.userLogIn(requestObject.username, requestObject.password)
      expect(logInStore.getUserLogInAPIStatus).toBe(API_SUCCESS)
      expect(mockSetCookie).toBeCalled()
   })

   it('should test userLogInAPI failure state', async () => {
      let requestObject = {
         username: 'sowjanya',
         password: 'sowju'
      }
      const mockFailurePromise = new Promise(function(resolve, reject) {
         reject(new Error('error'))
      })
      const mockLogInAPI = jest.fn()
      mockLogInAPI.mockReturnValue(mockFailurePromise)
      logInService.logInAPI = mockLogInAPI
      await logInStore.userLogIn(requestObject.username, requestObject.password)
      expect(logInStore.getUserLogInAPIStatus).toBe(API_FAILED)
   })

   it('should test user sign-out', () => {
      logInStore.userLogOut()
      expect(mockRemoveCookie).toBeCalled()
      expect(logInStore.getUserLogInAPIStatus).toBe(API_INITIAL)
      expect(logInStore.getUserLogInAPIError).toBe(null)
   })
})