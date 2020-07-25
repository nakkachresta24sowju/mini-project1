import React from 'react'
import { AdminHomePageContainer, Content } from './styledComponents'
import HomePageContent from '../HomePageContent'
import Sidebar from '../Sidebar'
import Header from '../../../User/components/Header'
class AdminHomePage extends React.Component {
   render() {
      return (
         <AdminHomePageContainer>
            <Header />
            <Content>
               <Sidebar />
               <HomePageContent />
            </Content>
         </AdminHomePageContainer>
      )
   }
}
export default AdminHomePage
