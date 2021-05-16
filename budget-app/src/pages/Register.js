import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react'
import { validation } from '../validation'

const Register = ({ onAdd }) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const [validData, setValidData] = useState(false)

    let history = useHistory()


    const registerMemberHandler = (e) => {
        e.preventDefault()
        setErrors(validation(userData))
        setValidData(true)
        onAdd({ ...userData, name: userData.name, email: userData.email, password: userData.password })
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && validData) {
            clearForm()
            history.push('/login')
        }
    }, [errors])




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
                        <Message>
                            {!errors.name ? '' : errors.name}
                            <Form.Input
                                fluid
                                placeholder='Name'
                                type='text'
                                value={userData.name}
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                                error={errors.bool}
                            />
                        </Message>
                        <Message>
                            {!errors.email ? '' : errors.email}
                            <Form.Input
                                fluid
                                placeholder='Email'
                                type='text'
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                error={errors.bool}
                            />
                        </Message>
                        <Message>
                            {!errors.password ? '' : errors.password}
                            <Form.Input
                                fluid
                                placeholder='Password'
                                type='password'
                                value={userData.password}
                                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                error={errors.bool}
                            />
                        </Message>
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
