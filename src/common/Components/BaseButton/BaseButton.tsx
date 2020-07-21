import React from 'react'
import { ButtonWrapper } from './styledComponent'

type Props = {
   textTypo: any
   className: any
   textTitle: any
   onClick: any
   type: any
   buttonHeight:any 
   buttonWidth:any
}
class BaseButton extends React.Component<Props> {
   render() {
      const { textTypo, textTitle, className, onClick,buttonHeight,buttonWidth} = this.props
      return (
         <ButtonWrapper className={className} onClick={onClick} buttonHeight={buttonHeight} buttonWidth={buttonWidth}>
            {textTitle}
         </ButtonWrapper>
      )
   }
}
export default BaseButton
