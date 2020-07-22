import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

interface componentProps {}
interface InjectedProps extends componentProps {
   
}

function withHeader(WrappedComponent: Function) {
   
   @observer
   class EnhancedComponent extends React.Component {
    
      render() {
      
         return (
            <WrappedComponent
               
            />
         )
      }
   }
   return EnhancedComponent
}
export default withHeader