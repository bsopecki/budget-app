import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const LoginForm = ({ loginHandler }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    let history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        loginHandler({ ...loginData, login: loginData.login, password: loginData.password })
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
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        />
                        <Button color='teal' fluid size='large'>
                            Login
                    </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default LoginForm