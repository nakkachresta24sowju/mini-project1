import React, { Component } from 'react'
import { AdminPageSidebarContainer, SidebarElements } from './styledComponents'
import AdminStore from '../../stores/AdminStore/AdminStore'
import IssuesRoute from '../../routes/IssuesRoute/IssuesRoute'
interface componentProps {
   NavigateIssuesPage: Function
}
class Sidebar extends Component<componentProps> {
   NavigateToIssuesPage = () => {
      const { NavigateIssuesPage } = this.props
      NavigateIssuesPage()
   }
   render() {
      return (
         <AdminPageSidebarContainer>
            <SidebarElements>
               <a onClick={this.NavigateToIssuesPage}>Issues</a>
            </SidebarElements>
            <SidebarElements>
               <a>Washing Machine</a>
            </SidebarElements>
            <SidebarElements>
               <a>Settings</a>
            </SidebarElements>
         </AdminPageSidebarContainer>
      )
   }
}

export default Sidebar
