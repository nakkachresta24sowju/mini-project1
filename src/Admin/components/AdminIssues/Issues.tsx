import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import AdminStore from '../../stores/AdminStore/AdminStore'
import BaseTable from '../../../common/Components/BaseTable/BaseTable'
interface componentProps extends WithTranslation {
   adminStore: AdminStore
}

class Issues extends Component<componentProps> {
   render() {
      return (
         <div>
            <p>table</p>
            <BaseTable />
         </div>
      )
   }
}

export default withTranslation('translation', { withRef: true })(Issues)
