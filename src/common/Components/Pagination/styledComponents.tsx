import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const PaginationContainer = styled.div`
   ${tw`text-xs`}
`
const PaginationArrow = styled.button`
   ${tw`border border-black mr-2 ml-2`}
`
const PageNumber = styled.p`
   ${tw`border border-black `}
`

const NavigateToPrevious = styled.div`
   ${tw`flex justify-center items-center rounded-sm border-solid border-2 border-black  p-2 h-6 w-6 m-1 `}
`
const NavigateToNext = styled.div`
   ${tw`flex justify-center rounded-sm border-solid border-2 border-black items-center p-2 h-6 w-6 m-1 `}
`
export {
   PageNumber,
   PaginationContainer,
   PaginationArrow,
   NavigateToPrevious,
   NavigateToNext
}
