import { LogInType,SignUpType } from '../stores/types'
interface LogInService {
   logInAPI: (request: LogInType) => Promise<string>
}
interface SignUpService{
   SignUpAPI:(request:SignUpType) => Promise<string>
}