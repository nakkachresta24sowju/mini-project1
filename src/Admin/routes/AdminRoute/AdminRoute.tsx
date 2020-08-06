import React from 'react'
import AdminHomePage from '../../components/HomePage/index'
import { inject } from 'mobx-react'
import AdminStore from '../../stores/AdminStore/AdminStore'
import { History } from 'history'
import { NavigateToAdminIssuesPage } from '../../utils/NavigationUtils'
import { Redirect, withRouter } from 'react-router-dom'
interface injectedProps {
   adminStore: AdminStore
   history: History
}
@inject('adminStore')
class AdminRoute extends React.Component<injectedProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }

   doNetworkCalls = () => {
      const { getWashingMachinesList } = this.props.adminStore
      getWashingMachinesList()
   }

   NavigateIssuesPage = () => {
      const { history } = this.props
      NavigateToAdminIssuesPage(history)
   }

   render() {
      const { adminStore } = this.props

      return (
         <AdminHomePage
            adminStore={adminStore}
            doNetworkCalls={this.doNetworkCalls}
            NavigateIssuesPage={this.NavigateIssuesPage}
         />
      )
   }
}
export default withRouter(AdminRoute)
