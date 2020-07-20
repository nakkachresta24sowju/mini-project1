import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const SignUpPageParentContainer = styled.div`
   ${tw` flex justify-center  items-center`}
   min-height: 100vh;
`
const SignUpPageChildContainer = styled.div`
   ${tw`flex flex-col justify-center p-8 `};
   border: 2px solid blue;
`
const ErrorMessage = styled.p`
   color: red;
   margin-left: 25px;
`
export { SignUpPageParentContainer, SignUpPageChildContainer, ErrorMessage }
