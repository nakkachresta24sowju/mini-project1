import React, { Component } from 'react'
import { Button as ActiveButton } from '../../../common/Components/Button'
import { Button as InActiveButton } from '../../../common/Components/Button'
import { Button as AddNewMachineButton } from '../../../common/Components/Button'
import {
   AdminHomePageContent,
   WashingMachineCard,
   Image,
   CardFooter,
   SlotsDropDown,
   ActiveText,
   WashingMachine,
   ActiveInactiveButtons,
   AddNewButtonStyles,
   InActiveActiveButtonStyles,
} from './styledComponents'
import AdminStore from '../../stores/AdminStore/AdminStore'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import AddNewMachine from '../AddNewMachine/AddNewMachine'
interface ComponentProps {
   adminStore: AdminStore
}
@observer
class HomePageContent extends Component<ComponentProps> {
   @observable activeStatus!: string
   @observable showPopup: boolean = false
   constructor(props) {
      super(props)
      this.activeStatus = 'ACTIVE'
   }
   onClickonActiveStatus = (event) => {
      this.activeStatus = event.target.value
      alert('hai')
   }

   onClickonStatusText = () => {
      alert('Status')
   }
   onClickAddNewMachine = () => {
      this.showPopup = true
      alert('Add new machine')
   }
   OnClickClose = () => {
      this.showPopup = false
   }

   renderWashingMachines = () => {
      let Status = this.activeStatus
      const { washingMachinesList } = this.props.adminStore
      if (Status === 'ACTIVE') {
         return (
            <React.Fragment>
               {washingMachinesList.map((obj) => {
                  if (obj.IsActive) {
                     return (
                        <WashingMachineCard>
                           <Image src={obj.WashingMachineImage} />
                           <p>Washing Machine Id:{obj.WashingMachineId} </p>
                           (this.activeStatus)
                           <CardFooter>
                              <SlotsDropDown>
                                 <select name='slots' id='slots'>
                                    <option value='update slots'>
                                       Update Slots
                                    </option>
                                    <option value='allocated slots'>
                                       Allocated Slots
                                    </option>
                                 </select>
                              </SlotsDropDown>
                              <ActiveText>
                                 <button
                                    value={'5'}
                                    onClick={this.onClickonStatusText}
                                 >
                                    Mark as active
                                 </button>
                              </ActiveText>
                           </CardFooter>
                        </WashingMachineCard>
                     )
                  }
               })}
            </React.Fragment>
         )
      } else if (Status === 'INACTIVE') {
         return (
            <React.Fragment>
               {washingMachinesList.map((obj) => {
                  if (!obj.IsActive) {
                     return (
                        <WashingMachineCard>
                           <Image src={obj.WashingMachineImage} />
                           <p>Washing Machine Id:{obj.WashingMachineId} </p>
                           (this.activeStatus)
                           <CardFooter>
                              <SlotsDropDown>
                                 <select name='slots' id='slots'>
                                    <option value='update slots'>
                                       Update Slots
                                    </option>
                                    <option value='allocated slots'>
                                       Allocated Slots
                                    </option>
                                 </select>
                              </SlotsDropDown>
                              <ActiveText>
                                 <button
                                    value={'5'}
                                    onClick={this.onClickonStatusText}
                                 >
                                    Mark as active
                                 </button>
                              </ActiveText>
                           </CardFooter>
                        </WashingMachineCard>
                     )
                  }
               })}
            </React.Fragment>
         )
      }
   }

   render() {
      return (
         <AdminHomePageContent>
            <ActiveInactiveButtons>
               <ActiveButton
                  value='ACTIVE'
                  textTypo='REVERT'
                  onClick={this.onClickonActiveStatus}
                  css={InActiveActiveButtonStyles}
                  type={ActiveButton.defaultTypes.type.Outline}
                  varient={ActiveButton.defaultTypes.varient.Oval}
                  textTitle='ACTIVE'
               />
               <InActiveButton
                  value='INACTIVE'
                  textTypo='REVERT'
                  onClick={this.onClickonActiveStatus}
                  css={InActiveActiveButtonStyles}
                  type={InActiveButton.defaultTypes.type.Outline}
                  varient={InActiveButton.defaultTypes.varient.Oval}
                  textTitle='INACTIVE'
               />
            </ActiveInactiveButtons>
            <AddNewMachineButton
               value='ADD NEW MACHINE'
               textTypo='REVERT'
               onClick={this.onClickAddNewMachine}
               css={AddNewButtonStyles}
               type={AddNewMachineButton.defaultTypes.type.Outline}
               varient={AddNewMachineButton.defaultTypes.varient.Oval}
               textTitle='ADD'
            />
            <WashingMachine>{this.renderWashingMachines()}</WashingMachine>
            {this.showPopup ? (
               <AddNewMachine
                  showPopup={this.showPopup}
                  OnClickClose={this.OnClickClose}
               />
            ) : null}
         </AdminHomePageContent>
      )
   }
}

export default HomePageContent
{
   /* <AddNewMachineButton>
<Button
   value={'kk'}
   key={new Date().getTime()}
   textTypo='revert'
   isDisable='false'
   className='something'
   buttonHeight={2}
   buttonWidth={10}
   buttonRadius={5}
   buttonColor='black'
   buttonBgcolor='blue'
   buttonBrcolor='red'
   buttonMargin={8}
   onClick={this.onClickAddNewMachine}
   type={Button.defaultTypes.type.Filled}
   varient={Button.defaultTypes.varient.Oval}
   textTitle='Add New Machine'
/>
</AddNewMachineButton> 
<Button
                  value='ACTIVE'
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
                  onClick={this.onClickonActiveStatus}
                  type={Button.defaultTypes.type.Outline}
                  varient={Button.defaultTypes.varient.Oval}
                  textTitle='ACTIVE'
               />
               <Button
                  value='INACTIVE'
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
                  onClick={this.onClickonInActiveStatus}
                  type={Button.defaultTypes.type.Outline}
                  varient={Button.defaultTypes.varient.Oval}
                  textTitle='INACTIVE'
               />*/
}
