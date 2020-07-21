import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import BaseButton from '../BaseButton/BaseButton'
import { css, jsx } from '@emotion/core'
type Props = {
   buttonRadius:any
   buttonColor:any
   buttonBgcolor:any
   buttonBrcolor:any
   variantType:any
}
const OutlineButton = styled(BaseButton)<Props>`
   background-color:white;
   color:${props => props.buttonColor};
   ${props => props.variantType === 'oval' && css`
   border-radius:${props.buttonRadius}rem
   `}
   ${props => props.variantType === 'rectangular' && css`
   border-radius:0px;
   `}
`
const FilledButton= styled(BaseButton)<Props>`
   background-color:${props => props.buttonBgcolor};
   color:${props => props.buttonColor};
   ${props => props.variantType === 'oval' && css`
   border-radius:${props.buttonRadius}rem
   `}
   ${props => props.variantType === 'rectangular' && css`
   border-radius:0px;
   `}
`

export { OutlineButton, FilledButton }
