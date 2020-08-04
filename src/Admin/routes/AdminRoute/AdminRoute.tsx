import React from 'react'
import AdminHomePage from '../../components/HomePage/index'
import { inject } from 'mobx-react'
import AdminStore from '../../stores/AdminStore/AdminStore'

interface injectedProps {
   adminStore: AdminStore
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

   render() {
      const { adminStore } = this.props

      return (
         <AdminHomePage
            adminStore={adminStore}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}
export default AdminRoute
