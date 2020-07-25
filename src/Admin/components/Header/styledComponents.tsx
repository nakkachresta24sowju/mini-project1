import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AdminHeader = styled.div`
   ${tw`flex`}
   height: 80px;
   justify-content: space-between;
   border: 2px solid blue;
`
const Logo = styled.div`
   ${tw`flex p-5`}
   justify-content: flex-start;
`
const Profile = styled.div`
   ${tw`flex p-5`}
   justify-content: flex-end;
`

export { AdminHeader, Logo, Profile }
