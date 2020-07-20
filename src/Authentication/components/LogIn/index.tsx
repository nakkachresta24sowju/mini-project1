import React from 'react'
import {
   LoginPageParentContainer,
   LoginPageChildContainer,
   ErrorMessage
} from './styledComponents'
import {
   Typo14WhiteRubikMedium,
   Typo12SteelHKGrotesk,
   Typo32DarkBlueGreyRubikRegular,
   Typo14DarkBlueGreyHKGroteskRegular
} from '../../../common/styleGuide/Typos'
import { InputTag } from '../../../common/styledComponents'
import { withTranslation, WithTranslation } from 'react-i18next'

interface Props extends WithTranslation {
   userName: string
   onChangeUserName(event: React.FormEvent<HTMLInputElement>): void
   password: string
   onChangePassword(event: React.FormEvent<HTMLInputElement>): void
   onClickLogIn(event: React.MouseEvent<HTMLButtonElement>): void
   errorMessage: string
}
class LoginPage extends React.Component<Props> {
   static defaultProps = {
      userName: '',
      password: '',
      errorMessage: '',
      onChangeUserName: () => {},
      onChangePassword: () => {},
      onClickLogIn: () => {}
   }
   render() {
      const {
         userName,
         onChangeUserName,
         password,
         onChangePassword,
         onClickLogIn,
         errorMessage
      } = this.props
      const { t } = this.props
      console.log(t, '11111')
      return (
         <LoginPageParentContainer>
            <LoginPageChildContainer>
               <img
                  src='https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ecca87bf-3005-41c9-aa87-d8a5dd3741ff.svg'
                  alt='ibhub-logo'
               />
               <Typo32DarkBlueGreyRubikRegular>
                  {t('strings:login.title')}
               </Typo32DarkBlueGreyRubikRegular>

               <Typo12SteelHKGrotesk>
                  {t('strings:login.username')}
               </Typo12SteelHKGrotesk>
               <InputTag
                  type='text'
                  value={userName}
                  onChange={onChangeUserName}
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
               </Typo14DarkBlueGreyHKGroteskRegular>
            </LoginPageChildContainer>
         </LoginPageParentContainer>
      )
   }
}
export default withTranslation('translation', { withRef: true })(LoginPage)