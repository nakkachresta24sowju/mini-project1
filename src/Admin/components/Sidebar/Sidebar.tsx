import React, { Component } from 'react'
import { AdminPageSidebarContainer, SidebarElements } from './styledComponents'
class Sidebar extends Component {
   render() {
      return (
         <AdminPageSidebarContainer>
            <SidebarElements>
               <a>Issues</a>
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
