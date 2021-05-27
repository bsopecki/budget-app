export const registerValidation = (values) => {
    let errors = {}

    if (!values.name) {
        errors.bool = true;
        errors.name = 'Name is required'
    } else if (Object.keys(values.name).length < 2) {
        errors.bool = true;
        errors.confirmedPassword = 'Name is too short'
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
    } else if (Object.keys(values.password).length < 6) {
        errors.bool = true;
        errors.password = 'Password is too short'
    }

    if (!values.confirmedPassword) {
        errors.bool = true;
        errors.confirmedPassword = 'Confirm password'
    } else if (values.confirmedPassword !== values.password) {
        errors.bool = true;
        errors.confirmedPassword = 'Passwords do not match'
    } else if (Object.keys(values.confirmedPassword).length < 6) {
        errors.bool = true;
        errors.confirmedPassword = 'Password is too short'
    }

    return errors
}

export const financeRecordValdation = (values) => {
    let errors = {}

    if (values.descripton === ' ') {
        errors.bool = true;
        errors.descripton = 'Description is required'
    } else if (!/^[A-Za-z]+$/.test(values.descripton)) {
        errors.bool = true;
        errors.descripton = 'Only letters are allowed'
    } else if (Object.keys(values.descripton).length < 6) {
        errors.bool = true;
        errors.descripton = 'Description is too short.Min lenght is 6'
    }

    if (!values.category) {
        errors.bool = true;
        errors.category = 'Category is required'
    } else if (values.category === ' ') {
        errors.bool = true;
        errors.category = 'Category is required'
    } else if (!/^[A-Za-z]+$/.test(values.category)) {
        errors.bool = true;
        errors.category = 'Only letters are allowed'
    } else if (Object.keys(values.category).length < 4) {
        errors.bool = true;
        errors.category = 'Name of category is too short.Min length is 4'
    }

    if (isNaN(values.amount)) {
        errors.bool = true;
        errors.amount = 'Numeric value required'
    } else if (values.amount < 0) {
        errors.bool = true;
        errors.amount = 'Amount must be a positive number'
    } else if (!/^\d+(?:\.\d{1,2})?$/.test(values.amount)) {
        errors.bool = true
        errors.amount = 'Numbers with at most 2 decimal places are allowed'
    }

    if (values.status === '') {
        errors.bool = true;
        errors.status = 'Please choose type of operation'
    }

    return errors
}

export const loginValidation = (user, registratedUser) => {
    let errors = {}

    if (!user.email) {
        errors.bool = true;
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.bool = true;
        errors.email = 'Email is invalid'
    } else if (user.email !== registratedUser.email || user.password !== registratedUser.password) {
        errors.bool = true;
        errors.email = 'Invalid email or password'
    }

    return errors
}