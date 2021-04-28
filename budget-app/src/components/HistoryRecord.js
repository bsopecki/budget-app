import React, { useState } from 'react'
import { Segment, Grid, GridRow, Icon } from 'semantic-ui-react'

const HistoryRecord = (props) => {
    const initialFinances = props.finances;
    const [financeRecord, setFinanceRecord] = useState(initialFinances);

    const deleteEntry = (id) => {
        const result = financeRecord.filter((entry) => entry.id !== id)
        setFinanceRecord(result)
    }
    return (<Segment>
        {financeRecord.map(finance =>
            <Segment key={finance.id} color={finance.status} >
                <Grid columns={3} textAlign="right">
                    <GridRow>
                        <Grid.Column width={7} textAlign="left">{finance.description}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{finance.category}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{finance.amount}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="trash" bordered onClick={() => deleteEntry(finance.id)}></Icon>
                        </Grid.Column>
                    </GridRow>
                </Grid>
            </Segment >
        )
        }
    </Segment>
    )

}
export default HistoryRecord
