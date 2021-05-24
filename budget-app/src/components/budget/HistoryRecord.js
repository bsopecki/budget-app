import { Segment, Grid, GridRow, Icon } from 'semantic-ui-react'
import NoRecords from './NoRecords'

const HistoryRecord = ({ records, onDelete }) => {

    return (<Segment>
        {records.length === 0 ? (<NoRecords />) : (
            records.map(record =>
                <Segment key={record.id} color={record.status} >
                    <Grid columns={3} textAlign="right">
                        <GridRow>
                            <Grid.Column width={7} textAlign="left">{record.description}</Grid.Column>
                            <Grid.Column width={3} textAlign="right">{record.category}</Grid.Column>
                            <Grid.Column width={3} textAlign="right">{record.amount}</Grid.Column>
                            <Grid.Column width={3}>
                                <Icon name="trash" bordered onClick={() => onDelete(record.id)}></Icon>
                            </Grid.Column>
                        </GridRow>
                    </Grid>
                </Segment >
            )
        )}
    </Segment>
    )

}
export default HistoryRecord
