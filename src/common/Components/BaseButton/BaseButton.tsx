import React from 'react'
import { ButtonWrapper } from './styledComponent'

type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   type: any
   buttonHeight: any
   buttonWidth: any
   value: any
   isDisable: string
}
class BaseButton extends React.Component<Props> {
   render() {
      const {
         textTypo,
         textTitle,
         className,
         onClick,
         buttonHeight,
         buttonWidth,
         value,
         isDisable,
      } = this.props
      return (
         <ButtonWrapper
            isDisable={isDisable}
            className={className}
            value={value}
            onClick={onClick}
            buttonHeight={buttonHeight}
            buttonWidth={buttonWidth}
         >
            {textTitle}
         </ButtonWrapper>
      )
   }
}
export default BaseButton
