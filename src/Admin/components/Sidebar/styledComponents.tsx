import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const AdminPageSidebarContainer = styled.div`
   ${tw`flex-col  `}
   margin: 10px;
   width: 14%;
   border: 2px solid green;
`
const SidebarElements = styled.div`
   border-bottom: 1px solid blue;
`
export { AdminPageSidebarContainer, SidebarElements }
