import React, { useState } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

const LoginForm = ({ loginHandler }) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    let history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        loginHandler({ userEmail, userPassword })
        accessHandler()
    }

    const accessHandler = () => {
        history.push('/budget')
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
            </Header>
                <Form size='large' onSubmit={onSubmit}>
                    <Segment stacked>
                        <Form.Input
                            fluid icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            type='text'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                        <Button color='teal' fluid size='large'>
                            Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to='/register'>Register</Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm