import React from 'react'
import { AdminHomePageContainer, Content } from './styledComponents'
import HomePageContent from '../HomePageContent'
import Sidebar from '../Sidebar'
import Header from '../../../Admin/components/Header/Header'
import AdminStore from '../../stores/AdminStore/AdminStore'
interface ComponentProps {
   adminStore: AdminStore
   doNetworkCalls: Function
}
import LoadingWrapperFailure from '../../../components/common/LoadingWrapperWithFailure'
import { observer } from 'mobx-react'

@observer
class AdminHomePage extends React.Component<ComponentProps> {
   renderHomePageContent = () => {
      const { adminStore } = this.props
      return <HomePageContent adminStore={adminStore} />
   }
   render() {
      const { adminStore } = this.props
      const {
         getWashingMachinesAPIStatus,
         getWashingMachinesAPIError,
         washingMachinesList,
      } = this.props.adminStore
      const { doNetworkCalls } = this.props

      return (
         <AdminHomePageContainer>
            <Header />
            <Content>
               <Sidebar />
               <LoadingWrapperFailure
                  apiStatus={getWashingMachinesAPIStatus}
                  apiError={getWashingMachinesAPIError}
                  onRetryClick={doNetworkCalls}
                  renderSuccessUI={this.renderHomePageContent}
               />
            </Content>
         </AdminHomePageContainer>
      )
   }
}
export default AdminHomePage
