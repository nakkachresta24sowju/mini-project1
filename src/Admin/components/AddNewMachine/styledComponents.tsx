import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css, jsx } from '@emotion/core'
const AddButtonStyles = css`
   background-color: cornflowerblue;
   font-size: 20px;
   padding: auto;
   height: 40px;
   width: 120px;
   :hover {
      color: blue;
   }
`
const CloseButtonStyles = css`
   border-radius: 30px;
   justify-content: end;
   font-size: 20px;
   padding: 20px;
   height: 40px;
   width: 40px;
   :hover {
      color: blue;
   }
`
const ImageWithDetails = styled.div`
   ${tw`flex justify-center items-center`}
   background-color:white;
`
const Image = styled.img`
   width: 50%;
`
const Details = styled.div`
   ${tw`flex flex-col justify-center`}
`
const AddNewMachineContainer = styled.div`
   ${tw`flex flex-col `}
   position: absolute;
   height: 100%;
   width: 100%;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   background: rgba(0, 0, 0, 0.5);
`
const Text = styled.p``
const InputTag = styled.input`
   border: 1px solid gray;
   border: 1px solid blue;
`
const CloseButtonContainer = styled.div`
   ${tw`flex justify-end`}
   background-color:white;
`
const PopupContentBox = styled.div`
   position: relative;
   margin: 10%;
   width: 70%;
   border: 4px solid maroon;
`
export {
   AddButtonStyles,
   Image,
   Details,
   Text,
   InputTag,
   AddNewMachineContainer,
   CloseButtonStyles,
   ImageWithDetails,
   CloseButtonContainer,
   PopupContentBox,
}
