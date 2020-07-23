import React from 'react'
import { inject, observer } from "mobx-react"
import Header from '../Header/Header'
import { withTranslation, WithTranslation } from 'react-i18next'
import UserStore from "../../stores/UserStore/UserStore"
import HomePageFeed from "../AvailableSlots"
import Button from '../../../common/Components/Button'
import AvailableSlotsComponent from '../../components/AvailableSlots/AvailableSlotsComponent'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'

interface componentProps extends WithTranslation {
    userStore :UserStore
}
@observer
class UserHomePage extends React.Component<componentProps>{
    
    render()
    {    
        const {t} = this.props
        const { userStore} = this.props
        
        return(<div>
            <Header/>
            <AvailableSlotsComponent userStore={userStore}/>
            </div>)
    }
}
export default withTranslation('translation', { withRef: true }) (UserHomePage)