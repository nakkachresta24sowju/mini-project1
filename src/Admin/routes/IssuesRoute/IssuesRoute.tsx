import React from 'react'
import IssuesPage from '../../components/AdminIssues/Issues'
import { inject } from 'mobx-react'
import AdminStore from '../../stores/AdminStore/AdminStore'
import { Redirect, withRouter } from 'react-router-dom'
import { History } from 'history'

import Sidebar from '../../components/Sidebar'
interface componentProps {
   history: History
}
interface injectedProps {
   adminStore: AdminStore
}
interface componentProps extends injectedProps {}
@inject('adminStore')
class IssuesRoute extends React.Component<componentProps> {
   // componentDidMount() {
   //     this.doNetworkCalls()
   //  }

   //  doNetworkCalls = () => {
   //     const { getWashingMachinesList } = this.props.adminStore
   //     getWashingMachinesList()
   //  }

   render() {
      const { adminStore } = this.props

      return <IssuesPage adminStore={adminStore} />
   }
}
export default withRouter(IssuesRoute)
