import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type Props = {
   buttonHeight: any
   buttonWidth: any
   isDisable: string
}
const ButtonWrapper = styled.button<Props>`
   height: ${(props) => props.buttonHeight}rem;
   width: ${(props) => props.buttonWidth}rem;
`

export { ButtonWrapper }
