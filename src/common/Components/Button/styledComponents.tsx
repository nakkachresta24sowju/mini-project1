import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import BaseButton from '../BaseButton/BaseButton'
import { css } from '@emotion/core'
type Props = {
   buttonRadius: number
   buttonColor: string
   buttonBgcolor: string
   buttonBrcolor: string
   variantType: string | undefined
   buttonMargin: number
   isDisable: string
}
const OutlineButton = styled(BaseButton)<Props>`
   background-color: white;
   color: ${(props) => props.buttonColor};
   border: 2px solid ${(props) => props.buttonBrcolor};
   margin: ${(props) => props.buttonMargin}px;
   ${(props) =>
      props.variantType === 'oval' &&
      css`
         border-radius: ${props.buttonRadius}px;
      `}
   ${(props) =>
      props.variantType === 'rectangular' &&
      css`
         border-radius: 0px;
         background-color: white;
      `}
      ${(props) =>
         props.isDisable === 'true' &&
         css`
            background: lightgray;
         `}
`
const FilledButton = styled(BaseButton)<Props>`
   background-color: ${(props) => props.buttonBgcolor};
   color: ${(props) => props.buttonColor};
   margin: ${(props) => props.buttonMargin}px;
   border: 2px solid ${(props) => props.buttonBrcolor};
   ${(props) =>
      props.variantType === 'oval' &&
      css`
         border-radius: ${props.buttonRadius}px;
      `}
   ${(props) =>
      props.variantType === 'rectangular' &&
      css`
         border-radius: 0px;
      `};
   ${(props) =>
      props.isDisable === 'true' &&
      css`
         background: lightgray;
      `}
`

export { OutlineButton, FilledButton }
