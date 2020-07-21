import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

interface componentProps {}
// interface InjectedProps extends componentProps {
//    domainStore: DomainStore
//    dashBoardStore: DashBoardStore
// }

function withHeader(WrappedComponent: Function) {
   
   @observer
   class EnhancedComponent extends React.Component {
    //   getInjectedProps = () => {
    //      const props = this.props as unknown
    //      return props as InjectedProps
    //   }
      render() {
         
        //  const {
        //     filterPostsBySearchText
        //  } = this.getInjectedProps().dashBoardStore

         return (
            <WrappedComponent
               
            />
         )
      }
   }
   return EnhancedComponent
}
export default withHeader