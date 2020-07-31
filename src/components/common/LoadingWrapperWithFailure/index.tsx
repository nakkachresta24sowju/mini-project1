import React from 'react'
import { observer } from 'mobx-react'

import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'

import LoadingView from './LoadingView'
import FailureView from './FailureView'

type Props = {
   apiStatus: any
   renderSuccessUI: any
   onRetryClick: any
   apiError: any
}
@observer
class LoadingWrapperWithFailure extends React.Component<Props> {
   render() {
      const {
         apiStatus,
         renderSuccessUI: RenderSuccessUI,
         onRetryClick,
         apiError,
      } = this.props

      const errorMessage = getUserDisplayableErrorMessage(apiError)

      switch (apiStatus) {
         case API_FETCHING:
            alert('fetching')
            return <LoadingView />
         case API_SUCCESS:
            alert('success')
            return <RenderSuccessUI />
         case API_FAILED:
            alert('failed')
            return (
               <FailureView
                  onRetryClick={onRetryClick}
                  errorMessage={errorMessage}
               />
            )
         default:
            return null
      }
   }
}

export default LoadingWrapperWithFailure
