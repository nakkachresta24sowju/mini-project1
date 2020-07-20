import LoginService from '../../Authentication/services/LoginAPI'
import LoginStore from '../../Authentication/stores/LogInStore/LoginStore'
import SignUpService from '../../Authentication/services/SignUpAPI'
import SignUpStore from '../../Authentication/stores/SignUpStore/SignUpStore'
const logInStore = new LoginStore(new LoginService())
const signUpStore = new SignUpStore(new SignUpService())
export default {
   logInStore,
   signUpStore
}