import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css, jsx } from '@emotion/core'
const AdminHomePageContent = styled.div`
   ${tw`flex flex-col`}
   justify-content:center;
   align-items: center;
   border: 2px solid red;
   margin: 10px;
`
const WashingMachineCard = styled.div`
   border: 2px solid royalblue;
   margin: 0.3%;
`
const Image = styled.img`
   height: 280px;
   width: 300px;
   border: 4px solid pink;
`

const CardFooter = styled.div`
   ${tw`flex`}
   justify-content: space-between;
`
const SlotsDropDown = styled.div``
const ActiveText = styled.div``

const WashingMachine = styled.div`
   ${tw`flex`}
   flex-wrap:wrap;
   justify-content: space-between;
`
const ActiveInactiveButtons = styled.div``
const AddNewButtonStyles = css``
const InActiveActiveButtonStyles = css``
export {
   AdminHomePageContent,
   WashingMachineCard,
   Image,
   CardFooter,
   SlotsDropDown,
   ActiveText,
   WashingMachine,
   ActiveInactiveButtons,
   AddNewButtonStyles,
   InActiveActiveButtonStyles,
}
