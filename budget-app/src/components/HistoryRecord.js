import React from 'react'
import { Segment, Grid, GridRow, Icon } from 'semantic-ui-react'
import { finances } from '../finances';

const HistoryRecord = () => {
    return (<Segment>
        {finances.map(elem =>
            <Segment key={elem.id} color={elem.status} >
                <Grid columns={3} textAlign="right">
                    <GridRow>
                        <Grid.Column width={7} textAlign="left">{elem.description}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{elem.category}</Grid.Column>
                        <Grid.Column width={3} textAlign="right">{elem.amount}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="trash" bordered></Icon>
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
