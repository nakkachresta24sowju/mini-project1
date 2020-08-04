import React, { Component } from 'react'
import { Button as AddButton } from '../../../common/Components/Button/index'
import { Button as CloseButton } from '../../../common/Components/Button/index'
import {
   Image,
   Details,
   AddNewMachineContainer,
   Text,
   InputTag,
   AddButtonStyles,
   CloseButtonStyles,
   ImageWithDetails,
   CloseButtonContainer,
   PopupContentBox,
} from './styledComponents'
type Props = {
   showPopup: boolean
   OnClickClose: Function
}

class AddNewMachine extends Component<Props> {
   OnClick = () => {
      alert('hai')
   }
   OnClickClose = () => {
      const { OnClickClose } = this.props
      OnClickClose()
   }
   render() {
      return (
         <AddNewMachineContainer>
            <PopupContentBox>
               <CloseButtonContainer>
                  <CloseButton
                     value='CLOSE'
                     textTypo='REVERT'
                     onClick={this.OnClickClose}
                     css={CloseButtonStyles}
                     type={CloseButton.defaultTypes.type.Outline}
                     varient={CloseButton.defaultTypes.varient.Oval}
                     textTitle='X'
                  />
               </CloseButtonContainer>
               <ImageWithDetails>
                  <Image
                     src={`https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/64d94196-a381-46e6-b8b5-ef5d8393ff6d.png`}
                  />
                  <Details>
                     <Text>Washing Machine ID</Text>
                     <InputTag />
                     <AddButton
                        value='ADD NEW BUTTON'
                        textTypo='REVERT'
                        onClick={this.OnClick}
                        css={AddButtonStyles}
                        type={AddButton.defaultTypes.type.Outline}
                        varient={AddButton.defaultTypes.varient.Oval}
                        textTitle='ADD'
                     />
                  </Details>
               </ImageWithDetails>
            </PopupContentBox>
         </AddNewMachineContainer>
      )
   }
}

export default AddNewMachine
