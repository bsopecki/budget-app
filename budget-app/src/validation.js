export const registerValidation = (values) => {
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

export const financeRecordValdation = (values) => {
    let errors = {}

    if (values.descripton === ' ') {
        errors.bool = true;
        errors.descripton = 'Description is required'
    } else if (!/^[A-Za-z]+$/.test(values.descripton)) {
        errors.bool = true;
        errors.descripton = 'Only letters are allowed'
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
        errors.status = 'Please choose type of opaeration'
    }

    return errors
}