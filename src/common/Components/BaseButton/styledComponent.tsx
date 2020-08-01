import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type Props = {
   textTypo: any
}
const ButtonWrapper = styled.button<Props>`
   color: white;
`
const Text = styled.span<Props>`
   ${(props) => props.textTypo};
`
export { ButtonWrapper, Text }
