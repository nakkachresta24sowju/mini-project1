import React from 'react'
import Button from '../../../common/Components/Button'
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
                        <Button
                           value={eachslot}
                           key={new Date().getTime()}
                           textTypo='revert'
                           isDisable='false'
                           className='something'
                           buttonHeight={2}
                           buttonWidth={10}
                           buttonRadius={5}
                           buttonColor='black'
                           buttonBgcolor='green'
                           buttonBrcolor='red'
                           buttonMargin={8}
                           onClick={this.onClickAvailableSlot.bind(
                              this,
                              eachslot.Id,
                              this.slotDate
                           )}
                           type={Button.defaultTypes.type.Outline}
                           varient={Button.defaultTypes.varient.Oval}
                           textTitle={eachslot.StartTime}
                        />
                     )
                  } else {
                     return (
                        <Button
                           value={eachslot}
                           isDisable='false'
                           key={new Date().getTime()}
                           textTypo='revert'
                           className='something'
                           buttonHeight={2}
                           buttonWidth={10}
                           buttonRadius={5}
                           buttonColor='black'
                           buttonBgcolor='green'
                           buttonBrcolor='red'
                           buttonMargin={8}
                           onClick={this.onClickAvailableSlot.bind(
                              this,
                              eachslot.Id,
                              this.slotDate
                           )}
                           type={Button.defaultTypes.type.Outline}
                           varient={Button.defaultTypes.varient.Oval}
                           textTitle={eachslot.StartTime}
                        />
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
                     <Button
                        value={item}
                        key={new Date().getTime()}
                        isDisable='true'
                        textTypo='revert'
                        className='something'
                        buttonHeight={2}
                        buttonWidth={10}
                        buttonRadius={5}
                        buttonColor='black'
                        buttonBgcolor='green'
                        buttonBrcolor='red'
                        buttonMargin={8}
                        onClick={this.onClickAvailableSlotDate.bind(
                           this,
                           item.Date
                        )}
                        type={Button.defaultTypes.type.Outline}
                        varient={Button.defaultTypes.varient.Oval}
                        textTitle={item.Date}
                     />
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
