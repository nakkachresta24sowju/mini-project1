import { LogInType,SignUpType,GetUserLoginApiResponse } from '../stores/types'
interface LogInServiceInterface {
   logInAPI: (request: LogInType) => Promise<GetUserLoginApiResponse>
}
// export interface SignUpServiceInterface{
//    SignUpAPI:(request:SignUpType) => Promise<string>
// }
export default LogInServiceInterface