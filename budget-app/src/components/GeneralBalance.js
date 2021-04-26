import React from 'react'
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function GeneralBalance() {
    return (
        <Statistic size="small">
            <StatisticLabel>Your Balance</StatisticLabel>
            <StatisticValue>$2500</StatisticValue>
        </Statistic>
    )
}

export default GeneralBalance
