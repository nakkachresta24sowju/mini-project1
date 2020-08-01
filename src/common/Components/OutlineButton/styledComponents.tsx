import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { css, jsx } from '@emotion/core'
type Props = {
   css: any
   varient: any
   textTypo: any
}
const Button = styled.button<Props>`
   ${(props) => props.css}
   ${(props) => props.varient}
`

const Text = styled.span<Props>`
   ${(props) => props.textTypo};
`
export { Button, Text }
