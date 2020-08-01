import React from 'react'
import { Button } from '../../common/Components/Button'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient,
} from '../../common/Components/Button/constants/buttonConstants'
import { Typo14ButtonText } from '../../common/styleGuide/Typos'
import { ButtonStyles } from './styledComponent'
class ButtonCreate extends React.Component {
   onClick = () => {
      alert('hai')
   }
   render() {
      return (
         <Button
            value='Button'
            textTypo={Typo14ButtonText}
            onClick={this.onClick}
            css={ButtonStyles}
            type={Button.defaultTypes.type.Outline}
            varient={Button.defaultTypes.varient.Oval}
            textTitle={TEXT_TITLE}
         />
      )
   }
}
export default ButtonCreate
