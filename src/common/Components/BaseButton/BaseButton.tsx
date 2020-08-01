import React from 'react'
import { ButtonWrapper, Text } from './styledComponent'

type Props = {
   textTypo: any
   textTitle: any
   onClick: any
   value: any
}
class BaseButton extends React.Component<Props> {
   render() {
      const { textTypo, textTitle, onClick, value } = this.props
      return (
         <ButtonWrapper value={value} textTypo={textTypo} onClick={onClick}>
            <Text textTypo={textTypo}>{textTitle}</Text>
         </ButtonWrapper>
      )
   }
}
export default BaseButton
