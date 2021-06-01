import { Segment, Grid, GridRow, Icon } from 'semantic-ui-react'
import NoRecords from './NoRecords'
import Dropdown from './Dropdown'


const HistoryRecord = ({ records, onDelete }) => {

    const filterRecords = (param) => {
        const filteredData = records.filter(({ category }) => category === param)
        console.log(filteredData)
    }
    return (<Segment>
        <Dropdown filterData={filterRecords} records={records} />
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
