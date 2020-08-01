import React from 'react'
import { Button } from '../../../common/Components/Button'
import { withTranslation, WithTranslation } from 'react-i18next'
import { UpcomingSlotsType, AvailableSlotsType } from '../../stores/types'
import { observer } from 'mobx-react'
import { toJS, observable } from 'mobx'
import { inject } from 'mobx-react'
import {
   Typo14DarkBlueGreyHKGroteskRegular,
   Typo14ButtonText,
} from '../../../common/styleGuide/Typos/index'
import {
   HomePageFeedContainer,
   AvailableSlotsContainer,
   AvailableSlotsCard,
   Checkboxes,
   Label,
   ThemeAvailable,
   ThemeSelect,
   ThemeBooked,
   EachSlot,
   SlotsContainer,
   UpcomingSlotsButton,
   AllocatedSlotsButton,
   EachSlotButton,
} from './styledComponents'
import UserStore from '../../stores/UserStore/UserStore'
import { SlotsType } from '../../stores/types'

interface Props extends WithTranslation {
   selectedAvailableSlotsList: Array<SlotsType>
   userStore: UserStore
}
@observer
class AvailableSlotsComponent extends React.Component<Props> {
   @observable slotDate: string = ''

   onClickAvailableSlot = (id, date) => {
      const { onClickAvailableSlot } = this.props.userStore
      onClickAvailableSlot(id, date)
      alert('hai')
   }
   onClickAvailableSlotDate = (date) => {
      const { onClickAvailableSlotDate } = this.props.userStore
      onClickAvailableSlotDate(date)
      alert('hello')
   }

   renderEachSlot = () => {
      const { selectedAvailableSlotsList } = this.props.userStore
      if (selectedAvailableSlotsList) {
         return (
            <React.Fragment>
               {selectedAvailableSlotsList.map((eachslot) => {
                  if (eachslot.IsAvailable) {
                     return (
                        <EachSlotButton
                           value={`${eachslot}`}
                           key={new Date().getTime()}
                           onClick={this.onClickAvailableSlot.bind(
                              this,
                              eachslot.Id,
                              this.slotDate
                           )}
                        >
                           {eachslot.StartTime}
                        </EachSlotButton>
                     )
                  } else {
                     return (
                        <EachSlotButton
                           value={`${eachslot}`}
                           key={new Date().getTime()}
                           onClick={this.onClickAvailableSlot.bind(
                              this,
                              eachslot.Id,
                              this.slotDate
                           )}
                        ></EachSlotButton>
                     )
                  }
               })}
            </React.Fragment>
         )
      } else {
         return <div>hello</div>
      }
   }

   renderAvailableSlots = () => {
      const { availableSlotsList } = this.props.userStore
      if (availableSlotsList) {
         return (
            <React.Fragment>
               {availableSlotsList.map((item) => {
                  this.slotDate = item.Date
                  return (
                     <AllocatedSlotsButton
                        value={`${item}`}
                        key={new Date().getTime()}
                        onClick={this.onClickAvailableSlotDate.bind(
                           this,
                           item.Date
                        )}
                     >
                        {item.Date}
                     </AllocatedSlotsButton>
                  )
               })}
            </React.Fragment>
         )
      }
   }

   render() {
      const { t } = this.props
      return (
         <HomePageFeedContainer>
            <AvailableSlotsContainer>
               <Typo14DarkBlueGreyHKGroteskRegular>
                  {t(`strings:homepage.availableslots`)}
               </Typo14DarkBlueGreyHKGroteskRegular>
               <div>{this.renderAvailableSlots()}</div>
               <AvailableSlotsCard>
                  <Checkboxes>
                     <Label>
                        <ThemeSelect></ThemeSelect>Selected
                     </Label>
                     <Label>
                        <ThemeBooked></ThemeBooked>Booked
                     </Label>
                     <Label>
                        <ThemeAvailable></ThemeAvailable>Available
                     </Label>
                  </Checkboxes>
                  <SlotsContainer>{this.renderEachSlot()}</SlotsContainer>
               </AvailableSlotsCard>
            </AvailableSlotsContainer>
         </HomePageFeedContainer>
      )
   }
}

export default withTranslation('translation', { withRef: true })(
   AvailableSlotsComponent
)
