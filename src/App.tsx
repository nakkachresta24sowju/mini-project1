import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import SignUpRoute from '././Authentication/routes/SignUpRoute/SignUpRoute'
import Stores from './common/Stores'
import Loader from './components/common/Icons/Loader/SvgFile'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import ProtectedRoute from './common/Components/ProtectedRoute/index'
import {
   ADMIN_HOME_PAGE,
   LOGIN_PATH,
   USER_HOME_PAGE,
} from './common/constants/routeConstants'
import AdminRoute from './Admin/routes/AdminRoute/AdminRoute'
import UserRoute from './User/routes/UserRoute/UserRoute'
const LogInRoute = lazy(() =>
   import('././Authentication/routes/LogInRoute/index')
)
const App = () => {
   return (
      <Provider {...Stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loader />}>
               <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                     <Route exact path={LOGIN_PATH} component={LogInRoute} />
                     <Route exact path={USER_HOME_PAGE} component={UserRoute} />
                     <Route
                        exact
                        path={ADMIN_HOME_PAGE}
                        component={AdminRoute}
                     />
                     <Route path='/' component={HomePage} />
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App
