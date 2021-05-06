import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import GeneralBalance from './components/GeneralBalance'
import DividedBalance from './components/DividedBalance'
import HistoryHeader from './components/HistoryHeader'
import HistoryRecord from './components/HistoryRecord'
import MainForm from './components/Form'
import FormHeader from './components/FormHeader'

const App = () => {
  const [records, setNewRecord] = useState([{
    id: 1,
    amount: 25,
    category: 'bills',
    description: 'cell phone',
    status: 'red'
  },
  {
    id: 2,
    amount: 1750,
    category: 'payouts',
    description: 'job salary',
    status: 'green'
  },
  {
    id: 3,
    amount: 250,
    category: 'bills',
    description: 'rent',
    status: 'red'
  },
  {
    id: 4,
    amount: 188,
    category: 'extra incomes',
    description: 'lottery',
    status: 'green'
  },
  {
    id: 5,
    amount: 149,
    category: 'bills',
    description: 'car insurance',
    status: 'red'
  },
  {
    id: 6,
    amount: 95,
    category: 'bills',
    description: 'loan installment',
    status: 'red'
  },
  {
    id: 7,
    amount: 75,
    category: 'extra incomes',
    description: 'maintenance',
    status: 'green'
  },
  {
    id: 8,
    amount: 40,
    category: 'clothes expenses',
    description: 'new shoes',
    status: 'red'
  },
  {
    id: 9,
    amount: 37,
    category: 'bills',
    description: 'electricity',
    status: 'red'
  }])
  const amounts = (param) => records.filter(({ status }) => status === param).map(({ amount }) => amount).reduce((a, b) => a + b)
  const mainBalance = amounts('green') - amounts('red')

  //Add task
  const addFinanceRecord = (financeRecord) => {
    const id = Math.floor(Math.random() * 30) + 1
    const newFinanceRecord = { id, ...financeRecord }
    setNewRecord([...records, newFinanceRecord])
  }

  return (
    <Container>
      <MainHeader />
      <GeneralBalance balance={mainBalance} />
      <DividedBalance data={amounts} />
      <HistoryHeader text='History' />
      <HistoryRecord records={records} />
      <FormHeader text='Add new transaction'></FormHeader>
      <MainForm onAdd={addFinanceRecord} />
    </Container>
  )
}

export default App;
