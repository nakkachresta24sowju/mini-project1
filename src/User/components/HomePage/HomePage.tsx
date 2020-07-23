import React from 'react'
import { inject, observer } from "mobx-react"
import Header from '../Header/Header'
import { withTranslation, WithTranslation } from 'react-i18next'
import UserStore from "../../stores/UserStore/UserStore"
import HomePageFeed from "../HomePageFeed"
import Button from '../../../common/Components/Button'
import {Typo14DarkBlueGreyHKGroteskRegular,Typo14ButtonText} from '../../../common/styleGuide/Typos/index'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import {HomePageFeedContainer,SlotsContainer,AvailableSlotsContainer,AvailableSlotsCard,UpcomingSlotsContainer,UpcomingSlotsCard} from './styledComponents'
interface componentProps extends WithTranslation {
    userStore :UserStore
}
@observer
class UserHomePage extends React.Component<componentProps>{
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

    //  get=(i=>{
    //      return "hi"
    //  }

    //  renderAvailableSlots = observer(() =>{
    //     const {availableSlots}= this.props.userStore
    //     return <div>
    //             {availableSlots.map(i=>{
    //             alert(i),
    //             {this.get(i)}
    //     })}
    //     </div>
    //  }
                                  
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
    render()
    {    
        const {t} = this.props
        const { availableSlots,upcomingSlots,getAvailableSlotsAPIError,getAvailableSlotsAPIStatus,getUpcomingSlotsAPIError,getUpcomingSlotsAPIStatus} = this.props.userStore
        console.log(availableSlots,44444444444)
        return(<div>
            <Header/>
            <HomePageFeedContainer>    
                <AvailableSlotsContainer>
                <Typo14DarkBlueGreyHKGroteskRegular>{t(`strings:homepage.availableslots`)}</Typo14DarkBlueGreyHKGroteskRegular>
                    <AvailableSlotsCard>
                        <div>Checkboxes</div>
                        <SlotsContainer>
                         <LoadingWrapperWithFailure
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
                
            </HomePageFeedContainer>
            </div>)
    }
}
export default withTranslation('translation', { withRef: true }) (UserHomePage)