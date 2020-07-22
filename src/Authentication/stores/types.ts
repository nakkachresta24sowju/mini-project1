export interface LogInType {
    username: string
    password: string
 }
 export interface SignUpType{
     username:string
     password:string
     confirmpassword:string
 }
 export interface GetUserLoginApiResponse{
    access_token:string
    is_admin:boolean
 }