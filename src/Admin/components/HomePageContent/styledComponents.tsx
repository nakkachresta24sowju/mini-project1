import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const AdminHomePageContent = styled.div`
   ${tw`flex`}
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
   margin: 0.5%;
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
export {
   AdminHomePageContent,
   WashingMachineCard,
   Image,
   CardFooter,
   SlotsDropDown,
   ActiveText,
   WashingMachine,
}
