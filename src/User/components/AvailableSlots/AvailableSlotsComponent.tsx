import React from 'react';
import Button from '../../../common/Components/Button'
//import {HomePageFeedContainer,SlotsContainer,AvailableSlotsContainer,AvailableSlotsCard,UpcomingSlotsContainer,UpcomingSlotsCard} from './styledComponents'

import { withTranslation, WithTranslation } from 'react-i18next'
import {UpcomingSlotsType, AvailableSlotsType} from '../../stores/types'
import { observer, Observer } from "mobx-react";
import {toJS} from "mobx"
import AvailableSlots from '../../stores/models/AvailableSlots'
import UpcomingSlots from '../../stores/models/UpcomingSlots'
import { object } from "@storybook/addon-knobs";
import LoadingWrapperFailure from '../../../components/common/LoadingWrapperWithFailure'
import {Typo14DarkBlueGreyHKGroteskRegular,Typo14ButtonText} from '../../../common/styleGuide/Typos/index'
import {HomePageFeedContainer,SlotsContainer,AvailableSlotsContainer,AvailableSlotsCard,UpcomingSlotsContainer,UpcomingSlotsCard} from './styledComponents'
import UserStore from "../../stores/UserStore/UserStore";
interface Props extends WithTranslation
{
    userStore:UserStore
}

@observer
class AvailableSlotsComponent extends React.Component<Props>{
    componentDidMount() {
        this.doNetworkCalls()
     }
     onClick = () =>
    {
        alert("hello")
    }
     doNetworkCalls = () => {
        const { getAvailableSlots,getUpcomingSlots  } = this.props.userStore
        getAvailableSlots(5)
        getUpcomingSlots()
     }
   
    renderUI=(item)=>
    {
        return (<div>{item.Slots.map( eachslot => { 
            return <Button
              textTypo="ertert"
              className={'something'}
              buttonHeight={2}
              buttonWidth={10}
              buttonRadius={4}
               buttonColor="blue"
              buttonBgcolor="maroon"
              buttonBrcolor="yellowgreen"
              onClick={this.onClick}
              type={Button.defaultTypes.type.Outline}
              varient={Button.defaultTypes.varient.Oval}    
              textTitle={eachslot.StartTime}
          />})}</div>)
        
    }
    renderAvailableSlots = observer(() =>{
        const {availableSlots}= this.props.userStore
        
             return (
                 <React.Fragment>
                {availableSlots.map(item => { 
                   return  this.renderUI(item)
              }
                )}
            </React.Fragment>
        )})

    render() {
        const {t}= this.props
       const {getAvailableSlotsAPIStatus,getAvailableSlotsAPIError}= this.props.userStore
        return (
            <div><HomePageFeedContainer>    
            <AvailableSlotsContainer>
            <Typo14DarkBlueGreyHKGroteskRegular>{t(`strings:homepage.availableslots`)}</Typo14DarkBlueGreyHKGroteskRegular>
                    <AvailableSlotsCard>
                        <div>Checkboxes</div>
                        <SlotsContainer>
                        <LoadingWrapperFailure
                          apiStatus={getAvailableSlotsAPIStatus}
                         apiError={getAvailableSlotsAPIError}
                         onRetryClick={this.doNetworkCalls}
                          renderSuccessUI={this.renderAvailableSlots}
                        />   
                    </SlotsContainer>  
                    </AvailableSlotsCard>
                </AvailableSlotsContainer>

                <UpcomingSlotsContainer>
                <Typo14DarkBlueGreyHKGroteskRegular>{t(`strings:homepage.upcomingslots`)}</Typo14DarkBlueGreyHKGroteskRegular>
                    <UpcomingSlotsCard></UpcomingSlotsCard>
                </UpcomingSlotsContainer>
                
            </HomePageFeedContainer></div>
        );
    }
}

export default withTranslation('translation', { withRef: true })(AvailableSlotsComponent)