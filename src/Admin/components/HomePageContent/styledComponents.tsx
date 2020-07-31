import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const AdminHomePageContent = styled.div`
   ${tw`flex flex-col`}
   justify-content:center;
   align-items: center;
   border: 2px solid red;
   margin: 10px;
   padding: 1%;
`
const WashingMachineCard = styled.div`
   border: 2px solid royalblue;
`
const Image = styled.img`
   height: 300px;
   width: 350px;
   margin: 0.2%;
   border: 4px solid pink;
`

const CardFooter = styled.div`
   ${tw`flex`}
   justify-content: space-around;
`
const SlotsDropDown = styled.div`
   border: 2px solid red;
`
const ActiveText = styled.div``

const WashingMachine = styled.div`
   ${tw`flex`}
   flex-wrap:wrap;
   justify-content: space-between;
`
const ActiveInactiveButtons = styled.div`
   border: 2px solid Red;
`
const AddNewMachineButton = styled.button`
   border: 4px solid green;
`
const ActiveButton = styled.button`
   border: 2px solid red;
`
const InActiveButton = styled.button`
   border: 2px solid red;
`

export {
   AdminHomePageContent,
   WashingMachineCard,
   Image,
   CardFooter,
   SlotsDropDown,
   ActiveText,
   WashingMachine,
   ActiveInactiveButtons,
   AddNewMachineButton,
   ActiveButton,
   InActiveButton,
}
