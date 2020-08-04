import React, { Component } from 'react'
import withHeader from '../../hocs/withHeader'
import { AdminHeader, Logo, Profile } from './styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'
import UserStore from '../../../User/stores/UserStore/UserStore'
interface componentProps {
   userStore: UserStore
}
interface componentProps extends WithTranslation {}
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

export default withHeader(
   withTranslation('translation', { withRef: true })(Header)
)
