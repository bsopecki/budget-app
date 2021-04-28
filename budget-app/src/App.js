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
  return (
    <Container>
      <MainHeader />
      <GeneralBalance />
      <DividedBalance />
      <HistoryHeader text='History' />
      <HistoryRecord finances={finances} />
      <FormHeader text='Add new transaction'></FormHeader>
      <MainForm />
    </Container>
  )
}

export default App;
