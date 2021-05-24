import { Form, Button } from 'semantic-ui-react'
import { useState } from 'react'


function MainForm({ onAdd }) {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [status, setStatus] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({ amount, category, description, status })
        cancelHandler()
    }
    const cancelHandler = () => {
        setDescription('')
        setAmount('')
        setCategory('')
        setStatus('')
    }
    return (
        <Form unstackable onSubmit={onSubmit}>
            <Form.Group>
                <Form.Input
                    required
                    onChange={(e) => { setDescription(e.target.value) }}
                    icon='tags'
                    width={10}
                    label='description'
                    value={description} placeholder="New shiny things"
                    error={'Please enter the name of item'}>
                </Form.Input>
                <Form.Input
                    required
                    onChange={(e) => { setCategory(e.target.value) }}
                    icon='info'
                    iconPosition='left'
                    width={3}
                    label='value'
                    value={category}
                    placeholder="for"
                    error={'Please enter category'}></Form.Input>
                <Form.Input
                    type='number'
                    required
                    onChange={(e) => { setAmount(parseInt(e.target.value)) }}
                    icon='dollar'
                    iconPosition='left'
                    width={3}
                    label='value'
                    value={amount}
                    placeholder="100"
                    error={'Please enter amount'}
                ></Form.Input>
            </Form.Group>
            <select value={status} required onChange={(e) => { setStatus(e.target.value) }}>
                <option value="">Type of operation</option>
                <option value='green'>Income</option>
                <option value='red'>Expense</option>
            </select>
            <Button.Group>
                <Button color='red' onClick={cancelHandler}>Canel</Button>
                <Button.Or />
                <Button color='green'>Ok</Button>
            </Button.Group>
        </Form>
    )
}

export default MainForm
