import React from 'react'
import { Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function GeneralBalance(props) {
    let status
    { if (props.balance < 0) { status = 'red' } status = 'green' }
    return (
        <Statistic size="small" color={status}>
            <StatisticLabel>Your Balance</StatisticLabel>
            <StatisticValue >{props.balance}</StatisticValue>
        </Statistic>
    )
}

export default GeneralBalance
