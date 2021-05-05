import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import GeneralBalance from './components/GeneralBalance'
import DividedBalance from './components/DividedBalance'
import HistoryHeader from './components/HistoryHeader'
import HistoryRecord from './components/HistoryRecord'
import MainForm from './components/Form'
import FormHeader from './components/FormHeader'
import { finances } from './finances';
const App = () => {
  const [newRecord, setNewRecord] = useState(finances)
  const amounts = (param) => finances.filter(({ status }) => status === param).map(({ amount }) => amount).reduce((a, b) => a + b)
  const mainBalance = amounts('green') - amounts('red')

  //Add task
  const addFinanceRecord = (financeRecord) => {
    const id = Math.floor(Math.random() * 30) + 1
    const newFinanceRecord = { id, ...financeRecord }
    setNewRecord([...newRecord, newFinanceRecord])
    console.log(newFinanceRecord)
  }

  return (
    <Container>
      <MainHeader />
      <GeneralBalance balance={mainBalance} />
      <DividedBalance data={amounts} />
      <HistoryHeader text='History' />
      <HistoryRecord finances={finances} />
      <FormHeader text='Add new transaction'></FormHeader>
      <MainForm onAdd={addFinanceRecord} />
    </Container>
  )
}

export default App;