import React, { Component } from 'react'
import { AdminHeader, Logo, Profile } from './styledComponents'
import UserStore from '../../../User/stores/UserStore/UserStore'
interface componentProps {
   userStore: UserStore
}
class Header extends Component<componentProps> {
   render() {
      const { userStore } = this.props
      return (
         <AdminHeader>
            <Logo>Logo</Logo>
            <Profile> Profile Icon</Profile>
         </AdminHeader>
      )
   }
}

export default Header
