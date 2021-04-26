import React from 'react'
import { Grid, Segment, Statistic, StatisticLabel, StatisticValue } from 'semantic-ui-react'

function DividedBalance() {
    return (
        <Segment textAlign="center">
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Statistic size="tiny" color="green">
                            <StatisticLabel style={{ textAlign: "left" }}>
                                Income:
                </StatisticLabel>
                            <StatisticValue>$3200</StatisticValue>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                        <Statistic size="tiny" color="red">
                            <StatisticLabel style={{ textAlign: "right" }}>
                                Expenses:
                </StatisticLabel>
                            <StatisticValue>$700</StatisticValue>
                        </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DividedBalance
