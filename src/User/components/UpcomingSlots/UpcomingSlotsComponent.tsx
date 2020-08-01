import React, { Component } from 'react'
import UserStore from '../../stores/UserStore/UserStore'
import { Button } from '../../../common/Components/Button/index'
import {
   UpcomingSlotsContainer,
   UpcomingSlotsCard,
   ButtonStyles,
} from './styledComponents'
import { Typo14DarkBlueGreyHKGroteskRegular } from '../../../common/styleGuide/Typos/index'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { UpcomingSlotsObj } from '../../stores/types'
interface Props extends WithTranslation {
   selectedUpcomingSlotsList: Array<UpcomingSlotsObj>
   userStore: UserStore
}
@observer
class UpcomingSlotsComponent extends Component<Props> {
   @observable id: number = 0
   @observable startTime: string = ''
   @observable endTime: string = ''

   onClickUpdatedSlot = (Id, StartTime, EndTime) => {
      this.id = Id
      this.startTime = StartTime
      this.endTime = EndTime
   }
   renderSlotDetails = (Id, StartTime, EndTime) => {
      return (
         <UpcomingSlotsCard>
            <p>Washing Machine Id : Washing Machine {Id}</p>
            <p>Time Slot : {StartTime - EndTime} </p>
         </UpcomingSlotsCard>
      )
   }
   renderUpcomingSlots = () => {
      const { upcomingSlotsList } = this.props.userStore
      if (upcomingSlotsList) {
         return (
            <React.Fragment>
               {upcomingSlotsList.map((eachslot) => {
                  return (
                     <Button
                        value='Button'
                        textTypo='revert'
                        css={ButtonStyles}
                        onClick={this.onClickUpdatedSlot.bind(
                           this,
                           eachslot.WashingMachineId,
                           eachslot.StartTime,
                           eachslot.EndTime
                        )}
                        type={Button.defaultTypes.type.Filled}
                        varient={Button.defaultTypes.varient.Oval}
                        textTitle={eachslot.Date}
                     />
                  )
               })}
            </React.Fragment>
         )
      } else {
         return <div>hello</div>
      }
   }
   render() {
      const { t } = this.props
      const {
         getUpcomingSlotsAPIStatus,
         getUpcomingSlotsAPIError,
      } = this.props.userStore
      return (
         <UpcomingSlotsContainer>
            <Typo14DarkBlueGreyHKGroteskRegular>
               {t(`strings:homepage.upcomingslots`)}
            </Typo14DarkBlueGreyHKGroteskRegular>
            {this.renderUpcomingSlots()}
            {this.renderSlotDetails(this.id, this.startTime, this.endTime)}
         </UpcomingSlotsContainer>
      )
   }
}

export default withTranslation('translation', { withRef: true })(
   UpcomingSlotsComponent
)
