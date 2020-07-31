import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const HomePageFeedContainer = styled.div`
   ${tw`flex `}
   border: 2px solid green;
   margin: 20px;
   justify-content: center;
`
const AvailableSlotsContainer = styled.div`
   border: 2px solid maroon;
   margin: 2%;
   width: 4/5;
`
const SlotsContainer = styled.div`
   ${tw`flex p-5 m-5`}
   border:2px solid yellowgreen;
   justify-content: center;
   flex-wrap: wrap;
`
const AvailableSlotsCard = styled.div`
   ${tw`flex-col `}
   border:2px solid blue;
   width: 4/5;
   margin: 5%;
`

const Checkboxes = styled.div`
   ${tw`flex`}
   justify-content:flex-end
`
const Label = styled.label`
   ${tw`flex m-5 `}
`
const ThemeSelect = styled.div`
   ${tw`h-4 w-4 bg-blue-600`}
   border: 2px solid grey;
`
const ThemeBooked = styled.div`
   ${tw`h-4 w-4 bg-grey-800`}
   border: 2px solid grey;
`
const ThemeAvailable = styled.div`
   ${tw`h-4 w-4 bg-white-400`}
   border: 2px solid grey;
`
const EachSlot = styled.div`
   ${tw`flex items-center content-center`}
   flex-wrap:wrap;
`
const UpcomingSlotsButton = styled.button`
   border: 2px solid pink;
`
const AllocatedSlotsButton = styled.button`
   border: 2px solid maroon;
`
const EachSlotButton = styled.button`
   border: 2px solid purple;
`

export {
   HomePageFeedContainer,
   SlotsContainer,
   AvailableSlotsContainer,
   AvailableSlotsCard,
   Checkboxes,
   Label,
   ThemeAvailable,
   ThemeSelect,
   ThemeBooked,
   EachSlot,
   UpcomingSlotsButton,
   AllocatedSlotsButton,
   EachSlotButton,
}
