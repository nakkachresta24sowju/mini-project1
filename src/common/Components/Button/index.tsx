import React from 'react'
import BaseButton from '../BaseButton/BaseButton'
import {
   TEXT_TITLE,
   ButtonTypes,
   ButtonVarient,
} from './constants/buttonConstants'
import './index.css'
import OutlineButton from '../OutlineButton/index'
import FilledButton from '../FilledButton/index'
import './index.css'
type Props = {
   textTypo: any
   textTitle: any
   onClick: any
   varient: any
   type: any
   css: any
   value: any
}

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
      const { type, ...otherProps } = this.props
      switch (type) {
         case ButtonTypes.Filled:
            return <FilledButton {...otherProps} />
         case ButtonTypes.Outline:
            return <OutlineButton {...otherProps} />
         default:
            console.warn('invalid type')
            return <BaseButton {...otherProps} />
      }
   }
}
export { Button }
