
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import HomePage from './components/HomePage'
import Page1 from './components/Page1'
import LogInRoute from '././Authentication/routes/LogInRoute/LoginRoute'
import SignUpRoute from '././Authentication/routes/SignUpRoute/SignUpRoute'
import Stores from './common/Stores'
import Loader from './components/common/Icons/Loader/SvgFile'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
// const DashBoardRoute = lazy(() =>
//    import('././Dashboard/routes/DashBoardRoute/DashboardRoute')
// )
// const SelectedDomainRoute = lazy(() =>
//    import('././Dashboard/routes/SelectedDomainRoute/SelectedDomainRoute')
// )
const App = () => {
   return (
      <Provider {...Stores}>
         <I18nextProvider i18n={i18n}>
            <Suspense fallback={<Loader />}>
               <Router basename={process.env.PUBLIC_URL}>
                  <Switch>
                     <Route exact path='/page-1'>
                        <Page1 />
                     </Route>
                     <Route exact path='/Login-Page' component={LogInRoute} />
                     <Route exact path='/Signin-Page' component={SignUpRoute} />
                     <Route path='/'>
                        <HomePage />
                     </Route>
                  </Switch>
               </Router>
            </Suspense>
         </I18nextProvider>
      </Provider>
   )
}

export default App