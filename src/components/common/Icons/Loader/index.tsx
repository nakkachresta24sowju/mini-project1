import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import SvgFile from './SvgFile'
import IbHubsLogo from './IbHubsLogo'
import ProfilePic from './ProfilePic'
type Props = {}
class Loader extends Component<Props> {
   render() {
      return (<React.Fragment>
         <SvgComponent renderComponent={SvgFile} {...this.props} />
         <SvgComponent renderComponent={IbHubsLogo} {...this.props} />
         <SvgComponent renderComponent = {ProfilePic} {...this.props} />
         </React.Fragment>)
         
   }
}

export default Loader