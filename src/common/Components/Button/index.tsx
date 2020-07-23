import React from 'react'
import BaseButton from '../BaseButton/BaseButton'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient
} from './constants/buttonConstants'
import { OutlineButton, FilledButton } from './styledComponents'
import './index.css'
import {Typo14ButtonText} from '../../styleGuide/Typos'
import ButtonType from "@storybook/addon-knobs/dist/components/types/Button"
type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   varient: any
   type: any
   buttonHeight:any
   buttonWidth:any
   buttonRadius:any
   buttonColor:any
   buttonBgcolor:any
   buttonBrcolor:any
}

class Button extends React.Component<Props> {
   
   static defaultTypes = {
      type: ButtonTypes,
      varient: ButtonVarient
   }
    
   variantsCss = () => {
      const { varient,type } = this.props
     if(varient === "OVAL")
     {
            return "oval"
     }
     else if(varient === "RECTANGULAR")
     {
            return "rectangular"
      }

   }
    render() {
      const { type ,textTitle,onClick,buttonHeight,buttonWidth,buttonRadius, buttonColor,buttonBgcolor,buttonBrcolor} = this.props
          
           if(type === ButtonTypes.Filled){
              return (
                 <FilledButton
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
                    
                 />
              )
           }
           else if(type === ButtonTypes.Outline){
              return (
                 <OutlineButton
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
                 />
              )
           }
           else{
                 alert("Invalid Type")
     }
    }
}
export default Button


// const { type, ...otherProps } = this.props

//       switch (type) {
//          case ButtonTypes.Filled:
//             return <BaseButton {...otherProps} css={this.variantsCss()} />
//          case ButtonTypes.Outline:
//             return <OutlineButton {...otherProps} css={this.variantsCss()} />
//          default:
//             console.warn('invalid type')
//             return null
//       }
//    }