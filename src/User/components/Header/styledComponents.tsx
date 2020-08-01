import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const HeaderContainer = styled.div`
   ${tw` flex `}

   @media (max-width: 375px) {
      flex-direction: row;
      flex-grow: 0.1;
   }
   @media (max-width: 425px) {
      flex-direction: row;
      flex-grow: 0.1;
   }
   @media (max-width: 768px) {
      flex-direction: row;
   }
   @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid blue;
   }
   @media (max-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid blue;
   }
   @media (max-width: 2560px) {
      flex-direction: row;
      justify-content: space-between;
      border: 1px solid blue;
   }
`
const Svg = styled.div`
   ${tw` flex items-center p-4`}
   border:1px solid red;
`
const Anchor = styled.a`
   ${tw` flex content-between p-2 hover:border border-blue-600 `}
   display:block;
   height: 50px;
`
const RouteComponents = styled.div`
   ${tw` flex p-5`}

   @media (max-width: 375px) {
      flex-direction: row;
      flex-wrap: wrap;
      border: 1px solid blue;
   }
   @media (max-width: 425px) {
      flex-direction: row;
      flex-wrap: wrap;
      border: 1px solid blue;
   }
   @media (max-width: 768px) {
      flex-direction: row;

      flex-wrap: wrap;
      border: 1px solid blue;
   }
   @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: space-between;
      flex-grow: 0.2;
      border: 1px solid blue;
   }
   @media (max-width: 1440px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: space-between;
      flex-grow: 0.2;
      border: 1px solid blue;
   }
   @media (max-width: 2560px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: space-between;
      flex-grow: 0.2;
      border: 1px solid blue;
   }
`

export { HeaderContainer, Svg, Anchor, RouteComponents }
