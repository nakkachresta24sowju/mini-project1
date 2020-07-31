import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const AdminPageSidebarContainer = styled.div`
   ${tw`flex-col p-5 `}
   margin: 10px;
   width: 2/5;
   border: 2px solid green;
`
const SidebarElements = styled.div`
   border-bottom: 1px solid blue;
`
export { AdminPageSidebarContainer, SidebarElements }
