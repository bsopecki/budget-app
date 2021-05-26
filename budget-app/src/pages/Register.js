import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import { registerValidation } from '../validation'

const Register = ({ onAdd }) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    let history = useHistory()


    const registerMemberHandler = (e) => {
        e.preventDefault()
        if (Object.keys(registerValidation(userData)).length === 0) {
            onAdd({ name: userData.name, email: userData.email, password: userData.password })
            clearForm(e)
            setErrors({})
            history.push('/login')
        } else {
            setErrors(registerValidation(userData))
        }
    }
    const clearForm = () => {
        setUserData({
            name: '',
            email: '',
            password: '',
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
                        {errors.name ? <Message>{errors.name}</Message> : ''}
                        <Form.Input
                            fluid
                            placeholder='Name'
                            type='text'
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            error={errors.bool}
                        />
                        {errors.email ? <Message>{errors.email}</Message> : ''}
                        <Form.Input
                            fluid
                            placeholder='Email'
                            type='text'
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            error={errors.bool}
                        />
                        {errors.password ? <Message>{errors.password}</Message> : ''}
                        <Form.Input
                            fluid
                            placeholder='Password'
                            type='password'
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
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
