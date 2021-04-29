import React from 'react'
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function GeneralBalance(props) {
    return (
        <Statistic size="small">
            <StatisticLabel>Your Balance</StatisticLabel>
            <StatisticValue>{props.balance}</StatisticValue>
        </Statistic>
    )
}

export default GeneralBalance
