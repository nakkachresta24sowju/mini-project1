import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const HomePageFeedContainer = styled.div`
 ${tw`flex flex-col items-center`}
 border:2px solid green;
 `
const AvailableSlotsContainer = styled.div`
border:2px solid maroon;
${tw`p-5`}

`
const SlotsContainer = styled.div`
${tw`flex content-between`}
border:2px solid #0000ff;
`
const AvailableSlotsCard = styled.div`

`
const UpcomingSlotsCard = styled.div`

`
const UpcomingSlotsContainer = styled.div`
border:2px solid greenyellow;

`
export {HomePageFeedContainer,SlotsContainer,AvailableSlotsContainer,AvailableSlotsCard,UpcomingSlotsContainer,UpcomingSlotsCard}