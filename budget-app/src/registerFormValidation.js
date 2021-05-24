export const validation = (values) => {
    let errors = {}

    if (!values.name) {
        errors.bool = true;
        errors.name = 'Name is required'
    }

    if (!values.email) {
        errors.bool = true;
        errors.email = 'Email is required'

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.bool = true;
        errors.email = 'Email is invalid'
    }

    if (!values.password) {
        errors.bool = true;
        errors.password = 'Password is required'
    }

    return errors
}