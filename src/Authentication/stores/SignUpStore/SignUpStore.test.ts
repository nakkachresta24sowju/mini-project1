import Cookie from 'js-cookie'
import {
   API_SUCCESS,
   API_FAILED,
   API_FETCHING,
   API_INITIAL
} from '@ib/api-constants'
import SignUpService from '../../services/SignUpAPI'
import getUserSignUpResponse from '../../fixtures/getUserLoginResponse.json'
import SignUpStore from './SignUpStore'
/*global jest*/
/*global expect */
let mockSetCookie = jest.fn()
let mockRemoveCookie = jest.fn()
Cookie.set = mockSetCookie
Cookie.remove = mockRemoveCookie

describe('signUpStoreTests', () => {
   let signUpService: SignUpService
   let signUpStore: SignUpStore

   beforeEach(() => {
      signUpService= new SignUpService()
      signUpStore= new SignUpStore(signUpService)
   })

   it('should test initialising login store', () => {
      expect(SignUpStore.getUserSignUpAPIStatus).toBe(API_INITIAL)
      expect(SignUpStore.getUserSignUpAPIError).toBe(null)
   })

   it('should test userLogInAPI data fetching state', () => {
      let requestObject = {
         username: 'sowjanya',
         password: 'sowju'
      }
      const mockLoadingPromise = new Promise(function(resolve, reject) {})
      const mockLogInAPI = jest.fn()
      mockLogInAPI.mockReturnValue(mockLoadingPromise)
      signUpService.signUpAPI = mockLogInAPI
      SignUpStore.userSignUp(requestObject.username, requestObject.password)
      expect(SignUpStore.getUserSignUpAPIStatus).toBe(API_FETCHING)
   })

   it('should test userLogInAPI success state', async () => {
      let requestObject = {
         username: 'sowjanya',
         password: 'sowju'
      }
      const mockSuccessPromise = new Promise(function(resolve, reject) {
         resolve(getUserSignUpResponse)
      })
      const mockLogInAPI = jest.fn()
      mockLogInAPI.mockReturnValue(mockSuccessPromise)
      signUpService.signUpAPI = mockLogInAPI

      await SignUpStore.userSignUP(requestObject.username, requestObject.password)
      expect(SignUpStore.getUserSignUpAPIStatus).toBe(API_SUCCESS)
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
      const mockSignUpAPI = jest.fn()
      mockSignUpAPI.mockReturnValue(mockFailurePromise)
      signUpService.signUpAPI = mockSignUpAPI
      await SignUpStore.userSignUp(requestObject.username, requestObject.password)
      expect(SignUpStore.getUserSignUpAPIStatus).toBe(API_FAILED)
   })

   it('should test user sign-out', () => {
      SignUpStore.userSignOut()
      expect(mockRemoveCookie).toBeCalled()
      expect(SignUpStore.getUserSignUpAPIStatus).toBe(API_INITIAL)
      expect(SignUpStore.getUserSignUpAPIError).toBe(null)
   })
})