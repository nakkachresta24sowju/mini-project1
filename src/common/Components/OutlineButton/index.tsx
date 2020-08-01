import React from 'react'
import { Button } from './styledComponents'

type Props = {
   textTypo: any
   textTitle: any
   onClick: any
   varient: any
   css: any
   value: any
}
class OutlineButton extends React.Component<Props> {
   render() {
      const { textTypo, varient, css, textTitle, onClick, value } = this.props
      return (
         <Button
            textTypo={textTypo}
            onClick={onClick}
            varient={varient}
            css={css}
            value={value}
         >
            {textTitle}
         </Button>
      )
   }
}
export default OutlineButton
