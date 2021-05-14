import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import { validation } from '../validation'

const Register = ({ onAdd }) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
    })

    const [errors, setErrors] = useState({
        name: 'Name',
        email: 'e-mail',
        password: 'Password',
        confirmedPassword: 'Confirm password',
        bool: false
    })

    let history = useHistory()

    const registerMemberHandler = (e) => {
        e.preventDefault()
        clearForm()
        redirectHandler()
        setErrors(validation(userData))
        console.log(userData)
    }

    const redirectHandler = () => {
        history.push('/login')
    }

    const clearForm = () => {
        setUserData({
            name: '',
            email: '',
            password: '',
            confirmedPassword: ''
        })
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Create account
            </Header>
                <Form size='large' onSubmit={registerMemberHandler}>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            placeholder={errors.name}
                            type='text'
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            error={errors.bool}
                        />
                        <Form.Input
                            fluid
                            placeholder={errors.email}
                            type='text'
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            error={errors.bool}
                        />
                        <Form.Input
                            fluid
                            placeholder={errors.password}
                            type='password'
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            error={errors.bool}
                        />
                        <Form.Input
                            fluid
                            placeholder={errors.confirmedPassword}
                            type='password'
                            value={userData.confirmedPassword}
                            onChange={(e) => setUserData({ ...userData, confirmedPassword: e.target.value })}
                            error={errors.bool}
                        />
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
