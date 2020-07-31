//import LoginService from '../../Authentication/services/LoginAPI'
import LoginService from '../../Authentication/services/LoginFixture'
import LoginStore from '../../Authentication/stores/LogInStore/LoginStore'
import SignUpService from '../../Authentication/services/SignUpAPI'
import SignUpStore from '../../Authentication/stores/SignUpStore/SignUpStore'
import UserService from '../../User/services/UserFixture'
import UserStore from '../../User/stores/UserStore/UserStore'
import AdminService from '../../Admin/services/AdminFixture'
import AdminStore from '../../Admin/stores/AdminStore/AdminStore'
const logInStore = new LoginStore(new LoginService())
const signUpStore = new SignUpStore(new SignUpService())
const userStore = new UserStore(new UserService())
const adminStore = new AdminStore(new AdminService())
export default {
   logInStore,
   signUpStore,
   userStore,
   adminStore,
}
