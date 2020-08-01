import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const InputTag = styled.input`
   ${tw` h-10 mt-3 ml-8 mr-8 w-64`}
   border:1px solid grey;
`
const Button = styled.button`
   ${tw` text-white h-8 rounded text-xs`}
   background-color:blue;
`

export { InputTag, Button }
