import React from "react"
import { UserHomePage } from "../../components/HomePage"
import UserStore from "../../stores/UserStore/UserStore"
import { inject } from "mobx-react"
type componentProps = {
    userStore :UserStore
}

@inject('userStore')
class UserRoute  extends React.Component<componentProps>{
render()
{
    const {userStore } = this.props
    return(
       <UserHomePage 
       userStore={userStore}
    />
    )
}
}
export default UserRoute