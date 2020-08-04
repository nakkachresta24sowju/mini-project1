import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AdminHomePageContainer = styled.div`
   border: 2px solid maroon;
   min-height: 100vh;
   height: auto;
`

const Content = styled.div`
   border: 2px solid pink;
   margin: 10px;
   ${tw`flex`}
`

export { AdminHomePageContainer, Content }
