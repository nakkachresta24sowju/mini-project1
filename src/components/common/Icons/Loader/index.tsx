import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import SvgFile from './SvgFile'
import IbHubsLogo from './IbHubsLogo'
type Props = {}
class Loader extends Component<Props> {
   render() {
      return (<React.Fragment>
         <SvgComponent renderComponent={SvgFile} {...this.props} />
         <SvgComponent renderComponent={IbHubsLogo} {...this.props} />
         </React.Fragment>)
         
   }
}

export default Loader