import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css, jsx } from '@emotion/core'
const ButtonStyles = css`
   border-radius: 30px;
   background-color: cornflowerblue;
   font-size: 20px;
   padding: 20px;
   height: 40px;
   width: 40px;
   :hover {
      color: blue;
   }
`
const Image = styled.img`
   height: 600px;
   width: 400px;
`
const Details = styled.div`
   ${tw`flex justify-center`}
`
const AddNewMachineContainer = styled.div`
   ${tw`flex justify-between`}
   position: fixed;
   height: 100%;
   width: 100%;
   left: 25%;
   right: 25%;
   top: 25%;
   bottom: 25%;
   margin: auto;
   background: rgba(0, 0, 0, 0.5);
`
const Text = styled.p``
const InputTag = styled.input`
   border: 1px solid gray;
`
export { ButtonStyles, Image, Details, Text, InputTag, AddNewMachineContainer }
