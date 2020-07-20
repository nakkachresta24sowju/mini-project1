import React, { Component } from 'react'
type Props = {
   renderComponent: any
   className?: any
}
class SvgComponent extends Component<Props> {
   render() {
      const {
         renderComponent: RenderComponent,
         className,
         ...other
      } = this.props
      return (
         <span className={className}>
            <RenderComponent {...other} />
         </span>
      )
   }
}

export default SvgComponent