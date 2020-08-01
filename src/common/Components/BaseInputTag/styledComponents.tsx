import styled from '@emotion/styled'
import tw from 'tailwind.macro'
type Props = {
   inputTagHeight: any
   inputTagWidth: any
}

const InputTagWrapper = styled.input<Props>`
   height: ${(props) => props.inputTagHeight}rem;
   width: ${(props) => props.inputTagWidth}rem;
`
export { InputTagWrapper }
