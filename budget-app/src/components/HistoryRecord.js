import React, { useState } from 'react'
import { Segment, Grid, GridRow, Icon } from 'semantic-ui-react'

const HistoryRecord = ({ records }) => {
    const initialFinances = records;
    const [financeRecord, setFinanceRecord] = useState(initialFinances);
    console.log(records)

    const deleteEntry = (id) => {
        const result = financeRecord.filter((entry) => entry.id !== id)
        setFinanceRecord(result)
    }
    return (<Segment>
        {records.map(record =>
            <Segment key={record.id} color={record.status} >
                <Grid columns={3} textAlign="right">
                    <GridRow>
                        <Grid.Column width={7} textAlign="left">{record.description}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{record.category}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{record.amount}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="trash" bordered onClick={() => deleteEntry(record.id)}></Icon>
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
