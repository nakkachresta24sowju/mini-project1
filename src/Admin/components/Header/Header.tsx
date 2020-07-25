import React, { Component } from 'react'
import { AdminHeader, Logo, Profile } from './styledComponents'
class Header extends Component {
   render() {
      return (
         <AdminHeader>
            <Logo>Logo</Logo>
            <Profile> Profile Icon</Profile>
         </AdminHeader>
      )
   }
}

export default Header
