import React from "react"
import { UserHomePage } from "../../components/HomePage"
import UserStore from "../../stores/UserStore/UserStore"
import { inject } from "mobx-react"
interface injectedProps{
    userStore :UserStore
}

@inject('userStore')
class UserRoute  extends React.Component<injectedProps>{
render()
{
    const {userStore } = this.props
    console.log(userStore,"route")
    return(
       <UserHomePage 
       userStore={userStore}
    />
    )
}
}
export default UserRoute
