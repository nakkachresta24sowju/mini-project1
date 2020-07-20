import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import SvgFile from './SvgFile'
type Props = {}
class Loader extends Component<Props> {
   render() {
      return <SvgComponent renderComponent={SvgFile} {...this.props} />
   }
}

export default Loader