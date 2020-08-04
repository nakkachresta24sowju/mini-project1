import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import Header from '../components/Header/index'
import UserStore from '../../User/stores/UserStore/UserStore'

interface componentProps {}
interface InjectedProps extends componentProps {
   userStore: UserStore
}

function withHeader(WrappedComponent: Function) {
   @inject('userStore')
   @observer
   class EnhancedComponent extends React.Component {
      getInjectedProps = () => {
         const props = this.props as unknown
         return props as InjectedProps
      }
      render() {
         const { userStore } = this.getInjectedProps()
         return (
            <div>
               <WrappedComponent {...this.props} />
            </div>
         )
      }
   }
   return EnhancedComponent
}
export default withHeader
