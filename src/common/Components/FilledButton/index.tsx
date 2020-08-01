import React from 'react'
import { Button, Text } from './styled.component'
type Props = {
   textTypo: any
   varient: any
   css: any
   textTitle: any
   onClick: any
   value: any
}
class FilledButton extends React.Component<Props> {
   render() {
      const { varient, css, textTitle, textTypo, onClick, value } = this.props
      return (
         <Button
            textTypo={textTypo}
            onClick={onClick}
            css={css}
            value={value}
            varient={varient}
         >
            {textTitle}
         </Button>
      )
   }
}
export default FilledButton
