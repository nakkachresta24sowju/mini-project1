import React from 'react'
import BaseButton from '../BaseButton/BaseButton'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient,
} from './constants/buttonConstants'
import { OutlineButton, FilledButton } from './styledComponents'
import './index.css'
import { Typo14ButtonText } from '../../styleGuide/Typos'
import ButtonType from '@storybook/addon-knobs/dist/components/types/Button'
import { observer } from 'mobx-react'
type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   varient: any
   type: any
   buttonHeight: any
   buttonWidth: any
   buttonRadius: any
   buttonColor: any
   buttonBgcolor: any
   buttonBrcolor: any
   buttonMargin: number
   value: any
   isDisable: string
}

@observer
class Button extends React.Component<Props> {
   static defaultTypes = {
      type: ButtonTypes,
      varient: ButtonVarient,
   }

   variantsCss = () => {
      const { varient, type } = this.props
      if (varient === 'OVAL') {
         return 'oval'
      } else if (varient === 'RECTANGULAR') {
         return 'rectangular'
      }
   }
   render() {
      console.log('button component')

      const {
         type,
         textTitle,
         onClick,
         buttonHeight,
         buttonWidth,
         buttonRadius,
         buttonColor,
         buttonBgcolor,
         buttonBrcolor,
         varient,
         buttonMargin,
         value,
         isDisable,
      } = this.props

      if (type === ButtonTypes.Filled) {
         console.log('Filled button')
         return (
            <FilledButton
               isDisable={isDisable}
               value={value}
               textTypo={Typo14ButtonText}
               className='something'
               textTitle={textTitle}
               onClick={onClick}
               type={ButtonTypes}
               buttonHeight={buttonHeight}
               buttonWidth={buttonWidth}
               variantType={this.variantsCss()}
               buttonRadius={buttonRadius}
               buttonColor={buttonColor}
               buttonBgcolor={buttonBgcolor}
               buttonBrcolor={buttonBrcolor}
               buttonMargin={buttonMargin}
            />
         )
      } else if (type === ButtonTypes.Outline) {
         console.log('outline button')
         return (
            <OutlineButton
               isDisable={isDisable}
               value={value}
               textTypo={Typo14ButtonText}
               className='something'
               textTitle={textTitle}
               onClick={onClick}
               type={ButtonTypes}
               buttonHeight={buttonHeight}
               buttonWidth={buttonWidth}
               variantType={this.variantsCss()}
               buttonRadius={buttonRadius}
               buttonColor={buttonColor}
               buttonBgcolor={buttonBgcolor}
               buttonBrcolor={buttonBrcolor}
               buttonMargin={buttonMargin}
            />
         )
      }
   }
}
export default Button
