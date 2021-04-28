import { Form, Button } from 'semantic-ui-react'

function MainForm() {

    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input icon='tags' width={10} label='description' placeholder="New shiny things"></Form.Input>
                <Form.Input icon='info' iconPosition='left' width={3} label='value' placeholder="category"></Form.Input>
                <Form.Input icon='dollar' iconPosition='left' width={3} label='value' placeholder="100"></Form.Input>
            </Form.Group>
            <Button.Group>
                <Button color='red'>Canel</Button>
                <Button.Or />
                <Button color='green'>Ok</Button>
            </Button.Group>
        </Form>
    )
}

export default MainForm
