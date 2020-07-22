import React from 'react'
import {
   LoginPageParentContainer,
   LoginPageChildContainer,
   ErrorMessage,
   Svg
} from './styledComponents'
import {
   Typo14WhiteRubikMedium,
   Typo12SteelHKGrotesk,
   Typo32DarkBlueGreyRubikRegular,
   Typo14DarkBlueGreyHKGroteskRegular,
   Typo14ButtonText
} from '../../../common/styleGuide/Typos'
import { InputTag } from '../../../common/styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'
import { observer } from "mobx-react"
import { observable } from "mobx"
import SvgComponent from "../../../components/common/Icons/Loader/IbHubsLogo"

interface Props extends WithTranslation {
   userName: string
   onChangeUsername(event: React.FormEvent<HTMLInputElement>):void
   password: string
   onChangePassword(event: React.FormEvent<HTMLInputElement>): void
   onClickLogIn(event: React.MouseEvent<HTMLButtonElement>): void
   errorMessage: string
}
@observer
class LoginPage extends React.Component<Props> {
  
   render() {
      const {
         userName,
         onChangeUsername,
         password,
         onChangePassword,
         onClickLogIn,
         errorMessage
      } = this.props
      const { t } = this.props
   
      return (
         <LoginPageParentContainer>
            <LoginPageChildContainer>
               <Svg><SvgComponent /></Svg>
               <Typo32DarkBlueGreyRubikRegular>
                  {t('strings:login.title')}
               </Typo32DarkBlueGreyRubikRegular>

               <Typo12SteelHKGrotesk>
                  {t('strings:login.username')}
               </Typo12SteelHKGrotesk>
               <InputTag
                  type='text'
                  value={userName}
                  onChange={onChangeUsername}
                  data-testid='username'
               />
               <Typo12SteelHKGrotesk>
                  {t('strings:login.password')}
               </Typo12SteelHKGrotesk>
               <InputTag
                  type='password'
                  value={password}
                  onChange={onChangePassword}
                  data-testid='password'
               />
               <ErrorMessage>{errorMessage}</ErrorMessage>
               <Typo14WhiteRubikMedium type='submit' onClick={onClickLogIn}>
                  LOGIN
               </Typo14WhiteRubikMedium>

               <Typo14DarkBlueGreyHKGroteskRegular>
                  {t(`strings:login.accountstatus`)} 
                  <Typo14ButtonText>{t(`strings:login.signuptext`)}</Typo14ButtonText>
               </Typo14DarkBlueGreyHKGroteskRegular>
            </LoginPageChildContainer>
         </LoginPageParentContainer>
      )
   }
}
export default withTranslation('translation', { withRef: true })(LoginPage)