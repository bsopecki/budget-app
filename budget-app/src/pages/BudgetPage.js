import FormHeader from '../components/budget/FormHeader'
import MainHeader from '../components/budget/MainHeader'
import DividedBalance from '../components/budget/DividedBalance'
import GeneralBalance from '../components/budget/GeneralBalance'
import HistoryHeader from '../components/budget/HistoryHeader'
import HistoryRecord from '../components/budget/HistoryRecord'
import MainForm from '../components/budget/Form'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'

import { finances } from '../finances'

const BudgetPage = () => {
    const initialRecords = finances
    const [records, setNewRecord] = useState(initialRecords)
    const amounts = (param) => {
        const filteredRecords = records.filter(({ status }) => status === param).map(({ amount }) => amount)
        let reducedRecords = 0
        if (filteredRecords.length > 0) {
            return filteredRecords.reduce((a, b) => a + b)
        } else {
            return reducedRecords
        }

    }
    //  records.filter(({ status }) => status === param).map(({ amount }) => amount).reduce((a, b) => a + b)


    const mainBalance = amounts('green') - amounts('red')

    //Add record
    const addFinanceRecord = (financeRecord) => {
        const id = records.length + 1;
        const newFinanceRecord = { id, ...financeRecord }
        setNewRecord([...records, newFinanceRecord])
    }

    //Delete record
    const deleteRecord = (id) => {
        setNewRecord(records.filter((record) => record.id !== id))
    }

    return (
        <Container>
            <MainHeader />
            <GeneralBalance balance={mainBalance} />
            <DividedBalance data={amounts} />
            <HistoryHeader text='History' />
            <HistoryRecord records={records} onDelete={deleteRecord} />
            <FormHeader text='Add new transaction'></FormHeader>
            <MainForm onAdd={addFinanceRecord} />
        </Container>
    )
}

export default BudgetPage
