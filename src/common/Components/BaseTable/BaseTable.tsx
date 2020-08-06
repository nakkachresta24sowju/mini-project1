import React from 'react'
import UseTable from 'react-table'
class BaseTable extends React.Component {
   render() {
      return (
         <div>
            <UseTable data='Id,Name,Team' columns='2,sowji,blue' />
         </div>
      )
   }
}
export default BaseTable
