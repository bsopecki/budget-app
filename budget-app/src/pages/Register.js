import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const Register = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    let history = useHistory()

    const registerMemberHandler = (e) => {
        e.preventDefault()
        onAdd({ name, email, password })
        clearForm()
        redirectHandler()
    }

    const redirectHandler = () => {
        history.push('/')
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmedPassword('')
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Create account
            </Header>
                <Form size='large' onSubmit={registerMemberHandler}>
                    <Segment stacked>
                        <Form.Input fluid placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <Form.Input fluid placeholder='e-mail' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Form.Input fluid placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Form.Input fluid placeholder='Confirm password' type='password' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)} />
                        <Button color='teal' fluid size='large'>
                            Create account
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Register
