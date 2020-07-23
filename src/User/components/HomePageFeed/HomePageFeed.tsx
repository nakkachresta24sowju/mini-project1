import React from 'react';
import Button from '../../../common/Components/Button'
//import {HomePageFeedContainer,SlotsContainer,AvailableSlotsContainer,AvailableSlotsCard,UpcomingSlotsContainer,UpcomingSlotsCard} from './styledComponents'

import { withTranslation, WithTranslation } from 'react-i18next'
import {UpcomingSlotsType, AvailableSlotsType} from '../../stores/types'
import { observer, Observer } from "mobx-react";
import {toJS} from "mobx"
import AvailableSlots from '../../stores/models/AvailableSlots'
import UpcomingSlots from '../../stores/models/UpcomingSlots'
import { object } from "@storybook/addon-knobs";
import LoadingWrapperFailure from '../../../components/common/LoadingWrapperWithFailure'
interface Props extends WithTranslation
{
    upcomingSlots:Array<UpcomingSlots> 
    availableSlots:Array<AvailableSlots>
}

@observer
class HomePageFeed extends React.Component<Props>{

    onClick = () =>
    {
        alert("hello")
    }

  

    render() {
        const {t,availableSlots,upcomingSlots}= this.props
       
        return (
            <div>gfhfgh</div>
        );
    }
}

export default withTranslation('translation', { withRef: true })(HomePageFeed)