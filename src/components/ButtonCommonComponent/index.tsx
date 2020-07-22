import React from 'react'
import Button from '../../common/Components/Button'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient
} from '../../common/Components/Button/constants/buttonConstants'
import { Typo14ButtonText } from '../../common/styleGuide/Typos'

class ButtonCreate extends React.Component {
   onClick = () => {
      alert('hai')
   }
   render() {
      return (
         <Button
            textTypo={Typo14ButtonText}
            className={'something'}
            buttonHeight={6}
            buttonWidth={8}
            buttonRadius={4}
            buttonColor="blue"
            buttonBgcolor="maroon"
            buttonBrcolor="yellowgreen"
            onClick={this.onClick}
            type={Button.defaultTypes.type.Outline}
            varient={Button.defaultTypes.varient.Oval}    
            textTitle={TEXT_TITLE}
         />
      )
   }
}
export default ButtonCreate
