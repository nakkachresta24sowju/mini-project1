import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import colors from '../../themes/Colors'
const Typo14WhiteRubikMedium = styled.button`
   ${tw`w-64 h-10 text-white m-8`}
   background-color:#0b69ff
`
const Typo12SteelHKGrotesk = styled.span`
   color: ${colors.steel};
   font-size: 10px;
   ${tw`ml-8 mr-8 mt-4`}
`

const Typo32DarkBlueGreyRubikRegular = styled.p`
   color: ${colors.darkbluegrey};
   ${tw`text-center text-xl `}
`
const Typo14DarkBlueGreyHKGroteskRegular = styled.span`
   ${tw``}
   color:'${colors.darkbluegrey}';
`
const HKGroteskSemiBold = styled.div`
   ${tw`mt-5`}
   color:blue;
   background-color: #bee3f8;
   font-size: 10px;
`
const Typo14ButtonText = styled.button`
   ${tw` text-blue-600 border border-transparent`}
   font-size:18px;
`
const Typo18SteelHKGroteskSemiBold = styled.div`
   font-size: 18px;
   color: ${colors.steel60};
`

export {
   Typo14ButtonText,
   Typo32DarkBlueGreyRubikRegular,
   Typo14WhiteRubikMedium,
   Typo12SteelHKGrotesk,
   Typo14DarkBlueGreyHKGroteskRegular,
   HKGroteskSemiBold,
   Typo18SteelHKGroteskSemiBold,
}
