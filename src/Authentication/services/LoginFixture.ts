import { create } from 'apisauce'
import getUserLoginResponse from '../fixtures/getUserLoginResponse.json'
import LogInServiceInterface from "."
import { resolveWithTimeout } from '../utils/TestUtils'


class LogInService implements LogInServiceInterface{
    
    logInAPI = (request) => {
        return resolveWithTimeout(getUserLoginResponse)
     }
    
}
export default LogInService