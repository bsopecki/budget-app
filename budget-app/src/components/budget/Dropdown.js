import React from 'react'
import { Dropdown, Segment } from 'semantic-ui-react'

const options = [
    { key: 'bills', text: 'Bills', value: 'bills' },
    { key: 'taxes', text: 'Taxes', value: 'taxes' },
    { key: 'loans', text: 'Loans', value: 'loans' },
    { key: 'clothes', text: 'Clothes and shoes', value: 'clothes and shoes' },
    { key: 'home equimpment', text: 'Home equipment', value: 'home equimpent' },
    { key: 'food', text: 'Food', value: 'food' },
    { key: 'recreation', text: 'Recreation', value: 'recreation' },
    { key: 'payout', text: 'Payouts', value: 'payouts' },
    { key: 'extra', text: 'Extra Incomes', value: 'extra incomes' },
    { key: 'presents', text: 'Presents', value: 'presents' },
    { key: 'tax', text: 'Tax Refunds', value: 'tax refunds' },
]

const FilterDropdown = ({ filterData, records }) => {
    console.log(records)
    return <Segment>
        <Dropdown onSearchChange={(e) => console.log(e.target.value)} placeholder='Choose what you wanna see' fluid multiple selection options={options} />
    </Segment >
}

export default FilterDropdown

