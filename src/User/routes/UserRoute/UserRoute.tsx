import React from 'react'
import { withRouter } from 'react-router-dom'
import { UserHomePage } from '../../components/HomePage'
import { inject } from 'mobx-react'
import UpcomingSlots from '../../stores/models/UpcomingSlots'
import UserStore from '../../stores/UserStore/UserStore'
interface injectedProps {
   userStore: UserStore
}

@inject('userStore')
// class UserRoute extends React.Component<injectedProps> {
//
//    render() {
//       const { userStore } = this.props
//
//       return (
//          <UserHomePage
//             userStore={userStore}
//             selectedAvailableSlotsList={selectedAvailableSlotsList}
//             selectedUpcomingSlotsList={selectedUpcomingSlotsList}
//             doNetworkCalls={this.doNetworkCalls}
//          />
//       )
//    }
// }
// export default withRouter(UserRoute)

@inject('userStore')
class UserRoute extends React.Component<injectedProps> {
   componentDidMount() {
      this.doNetworkCalls()
   }

   doNetworkCalls = () => {
      const { getAvailableSlots, getUpcomingSlots } = this.props.userStore
      getAvailableSlots(5)
      getUpcomingSlots()
   }
   changeRoute = () => {}
   render() {
      const {
         availableSlotsList,
         selectedAvailableSlotsList,
         selectedUpcomingSlotsList,
         upcomingSlotsList,
      } = this.props.userStore
      const { userStore } = this.props
      return (
         <UserHomePage
            userStore={userStore}
            selectedAvailableSlotsList={selectedAvailableSlotsList}
            selectedUpcomingSlotsList={selectedUpcomingSlotsList}
            doNetworkCalls={this.doNetworkCalls}
         />
      )
   }
}
export default UserRoute
