import React from 'react'
import { inject, observer } from 'mobx-react'
import Header from '../Header/Header'
import { withTranslation, WithTranslation } from 'react-i18next'
import UserStore from '../../stores/UserStore/UserStore'
import AvailableSlotsComponent from '../../components/AvailableSlots/index'
import UpcomingSlotsComponent from '../../components/UpcomingSlots/index'
import { SlotsType, UpcomingSlotsObj } from '../../stores/types'
import LoadingWrapperFailure from '../../../components/common/LoadingWrapperWithFailure'
import withHeader from '../../hocs/withHeader'
interface componentProps extends WithTranslation {
   userStore: UserStore
   selectedAvailableSlotsList: Array<SlotsType>
   selectedUpcomingSlotsList: Array<UpcomingSlotsObj>
   doNetworkCalls: Function
}
@observer
class UserHomePage extends React.Component<componentProps> {
   renderAvailableSlotsUI = () => {
      const { userStore } = this.props
      const { selectedAvailableSlotsList } = this.props
      return (
         <AvailableSlotsComponent
            userStore={userStore}
            selectedAvailableSlotsList={selectedAvailableSlotsList}
         />
      )
   }
   renderUpcomingSlotsUI = () => {
      const { userStore } = this.props
      const { selectedUpcomingSlotsList } = this.props
      return (
         <UpcomingSlotsComponent
            userStore={userStore}
            selectedUpcomingSlotsList={selectedUpcomingSlotsList}
         />
      )
   }

   render() {
      const {
         getAvailableSlotsAPIStatus,
         getAvailableSlotsAPIError,
      } = this.props.userStore
      const { doNetworkCalls } = this.props
      return (
         <React.Fragment>
            <Header />
            <LoadingWrapperFailure
               apiStatus={getAvailableSlotsAPIStatus}
               apiError={getAvailableSlotsAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderAvailableSlotsUI}
            />
            <LoadingWrapperFailure
               apiStatus={getAvailableSlotsAPIStatus}
               apiError={getAvailableSlotsAPIError}
               onRetryClick={doNetworkCalls}
               renderSuccessUI={this.renderUpcomingSlotsUI}
            />
         </React.Fragment>
      )
   }
}
export default withTranslation('translation', { withRef: true })(UserHomePage)
