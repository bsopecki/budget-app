import { Form, Button, Message } from 'semantic-ui-react'
import { useState } from 'react'
import { financeRecordValdation } from '../../validation'


function MainForm({ onAdd }) {
    const [newItem, setNewItem] = useState({
        amount: '',
        category: '',
        description: '',
        status: ''
    })
    const [errors, setErrors] = useState({})

    const numberConverter = (value) => {
        let num = parseFloat(value)
        return num
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(financeRecordValdation(newItem)).length === 0) {
            onAdd({
                amount: newItem.amount,
                category: newItem.category,
                description: newItem.description,
                status: newItem.status
            });
            cancelHandler(e)
            setErrors({})
        } else {
            setErrors(financeRecordValdation(newItem))
        }
    }

    const cancelHandler = (e) => {
        e.preventDefault()
        setNewItem({
            amount: '',
            category: '',
            description: '',
            status: ''
        })
    }
    return (
        <Form unstackable onSubmit={onSubmit}>
            {errors.description ? <Message>{errors.description}</Message> : ''}
            <Form.Input
                type='text'
                onChange={(e) => { setNewItem({ ...newItem, description: e.target.value }) }}
                icon='tags'
                width={12}
                label='description'
                value={newItem.description}
                placeholder="New shiny things"
                error={errors.bool}>
            </Form.Input>
            {errors.category ? <Message>{errors.category}</Message> : ''}
            <Form.Input
                type='text'
                onChange={(e) => { setNewItem({ ...newItem, category: e.target.value }) }}
                icon='info'
                iconPosition='left'
                width={12}
                label='category'
                value={newItem.category}
                placeholder="for"
                error={errors.bool}>
            </Form.Input>
            {errors.amount ? <Message>{errors.amount}</Message> : ''}
            <Form.Input
                type='number'
                onChange={(e) => { setNewItem({ ...newItem, amount: numberConverter(e.target.value) }) }}
                icon='dollar'
                iconPosition='left'
                width={12}
                label='amount'
                value={newItem.amount}
                placeholder="100"
                error={errors.bool}
            ></Form.Input>
            {errors.status ? <Message>{errors.status}</Message> : ''}
            <select value={newItem.status} onChange={(e) => { setNewItem({ ...newItem, status: e.target.value }) }}>
                <option value="">Type of operation</option>
                <option value='green'>Income</option>
                <option value='red'>Expense</option>
            </select>
            <Button.Group>
                <Button color='red' onClick={cancelHandler}>Cancel</Button>
                <Button.Or />
                <Button color='green'>Ok</Button>
            </Button.Group>
        </Form>
    )
}

export default MainForm
