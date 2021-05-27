import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import { useHistory, Link } from 'react-router-dom'
import { loginValidation } from '../validation'

const LoginForm = ({ users }) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})
    let history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        const loggedUser = users.map((user) => {
            if (user.email === loginData.email && user.password === loginData.password) {
                return user
            } else {
                return {
                    email: '',
                    password: ''
                }
            }

        })

        const filtered = loggedUser.filter((elem) => elem.email !== '' && elem.password !== '')

        if (loggedUser && filtered.length > 0) {
            dataCleaner(e)
            setErrors({})
            accessHandler()
        } else {
            setErrors(loginValidation(loginData, loggedUser))
        }

    }

    const dataCleaner = (e) => {
        e.preventDefault()
        setLoginData({
            email: '',
            password: ''
        })
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
                        {errors.email ? <Message>{errors.email}</Message> : ''}
                        <Form.Input
                            fluid icon='user'
                            iconPosition='left'
                            placeholder='E-mail address'
                            type='text'
                            value={loginData.email}
                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                            error={errors.bool}
                        />
                        {errors.password ? <Message>{errors.password}</Message> : ''}
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={loginData.password}
                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            error={errors.bool}
                        />
                        <Button color='teal' fluid size='large'>
                            Login
                    </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <Link to='/register'>Sign Up</Link>
                </Message>
            </Grid.Column>

        </Grid>
    )
}

export default LoginForm