import React from 'react'
import { inject } from "mobx-react"
import UserStore from "../../stores/UserStore/UserStore"
type componentProps = {
    userStore :UserStore
}

class UserHomePage extends React.Component<componentProps>{
    componentDidMount() {
        this.doNetworkCalls()
     }
     doNetworkCalls = () => {
        const { getAvailableSlots,getUpcomingSlots  } = this.props.userStore
        getAvailableSlots(5)
        getUpcomingSlots()
     }
    render()
    {
        return(<div>User Home Page</div>)
    }
}
export default UserHomePage