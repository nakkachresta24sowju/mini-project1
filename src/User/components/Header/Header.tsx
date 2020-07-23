import React from 'react'
import  withHeader from '../../hocs/index'
import {HeaderContainer} from './styledComponents'
import SvgComponent from "../../../components/common/Icons/Loader/IbHubsLogo"
import { withTranslation, WithTranslation } from 'react-i18next'
import {
    Typo18SteelHKGroteskSemiBold
 } from '../../../common/styleGuide/Typos'
import {Svg,Anchor,RouteComponents} from './styledComponents'
import UserStore from "../../stores/UserStore/UserStore"
import { Observer } from "mobx-react"
 interface componentProps {
    userStore:UserStore
 } 
 interface componentProps extends WithTranslation{}


 
class Header extends React.Component<componentProps>{
    handleClick = (event) =>
    {
        alert("hai")
    }

    render()
    {
        const { t } = this.props
        return(<HeaderContainer>
            <Svg><SvgComponent /></Svg>   
            <RouteComponents>
            <Anchor onClick={event =>this.handleClick(event)}>
                <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.home')}</Typo18SteelHKGroteskSemiBold>
            </Anchor>
            <Anchor>
                <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.requests')}</Typo18SteelHKGroteskSemiBold>
            </Anchor>
            <Anchor onClick={event =>this.handleClick(event)}>
                <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.report an issue')}</Typo18SteelHKGroteskSemiBold>
                           </Anchor>
            <Anchor onClick={event =>this.handleClick(event)}>
                <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.previous slots')}</Typo18SteelHKGroteskSemiBold></Anchor>
            <Anchor>
            <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.profile')}{}</Typo18SteelHKGroteskSemiBold>
            </Anchor>
            
            </RouteComponents>
            {/* <Anchor onClick={event =>this.handleClick(event)}>
                <Typo18SteelHKGroteskSemiBold>{t ('strings:userheader.no of slots')}</Typo18SteelHKGroteskSemiBold>
            </Anchor> */}
            </HeaderContainer>)
    }
}
export default withHeader(withTranslation('translation', { withRef: true })(Header))