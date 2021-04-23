import { Container, Grid, Icon, GridRow, Header, Segment, Statistic, StatisticLabel, StatisticValue, Form, Button } from 'semantic-ui-react'
const App = () => {
  return (
    <Container>
      <Header as="h1">Your budget app</Header>
      <Statistic size="small">
        <StatisticLabel>Your Balance</StatisticLabel>
        <StatisticValue>$2500</StatisticValue>
      </Statistic>
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
      <Header as='h3'>History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered te></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered te></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered te></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$80</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered te></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <Grid.Column width={10} textAlign="left">Something</Grid.Column>
            <Grid.Column width={3} textAlign="right">$10</Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered te></Icon>
              <Icon name="trash" bordered></Icon>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Segment>
      <Header as='h3'>Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='description' placeholder="New shiny things"></Form.Input>
          <Form.Input icon='dollar' iconPosition='left' width={4} label='value' placeholder="100"></Form.Input>
        </Form.Group>
        <Button.Group>
          <Button color='red'>Canel</Button>
          <Button.Or />
          <Button color='green'>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  )
}

export default App;
