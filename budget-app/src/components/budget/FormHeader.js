import React from 'react'
import { Header } from 'semantic-ui-react'

function FormHeader(props) {
    return (
        <Header as='h3'>{props.text}</Header>
    )
}

export default FormHeader
