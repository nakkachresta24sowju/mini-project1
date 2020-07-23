import React, { Component } from 'react'
import UserStore from '../../stores/UserStore/UserStore'
interface Props {
   userStore: UserStore
}
class UpcomingSlotsComponent extends Component<Props> {
   render() {
      return <div>Upcoming Slots</div>
   }
}

export default UpcomingSlotsComponent
