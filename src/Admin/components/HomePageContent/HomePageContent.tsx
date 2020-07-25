import React, { Component } from 'react'
import {
   AdminHomePageContent,
   WashingMachineCard,
   Image,
   CardFooter,
   SlotsDropDown,
   ActiveText,
   WashingMachine,
} from './styledComponents'
class HomePageContent extends Component {
   onClickonActive = (event) => {
      const id = event.target.value
      alert('haiiiiii')
      //onClickonActive()
   }
   render() {
      return (
         <AdminHomePageContent>
            <WashingMachine>
               <WashingMachineCard>
                  <Image src='https://www.w3schools.com/images/w3schools_green.jpg' />
                  <p>Washing Machine Id:{} </p>
                  <CardFooter>
                     <SlotsDropDown>
                        <select name='slots' id='slots'>
                           <option value='update slots'>Update Slots</option>
                           <option value='allocated slots'>
                              Allocated Slots
                           </option>
                        </select>
                     </SlotsDropDown>
                     <ActiveText>
                        <button value={'5'} onClick={this.onClickonActive}>
                           Mark as active
                        </button>
                     </ActiveText>
                  </CardFooter>
               </WashingMachineCard>
            </WashingMachine>
         </AdminHomePageContent>
      )
   }
}

export default HomePageContent
