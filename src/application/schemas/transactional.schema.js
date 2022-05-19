const {
    fieldRequired, 
    typeError, 
    lengthError
} = require('../errors/messages');

exports.inputSchema = {
    title: 'transactional input message',
    description: 'data to inactivate account',
    type: 'object',
    properties: {
        cuit: {
            type: 'string',
            pattern: '^[0-9]+$',
            minLength: 11,
            maxLength: 11,
            errorMessage: {
                type: typeError('cuit', 'string'),
                required: fieldRequired('cuit'),
                minLength: lengthError('cuit', 11),
                maxLength: lengthError('cuit', 11),
            },
        },
        email: {
            type: 'string',
            format: 'email',
            errorMessage: {
                type: typeError('email', 'string'),
                format: typeError('email', 'email'),
            },
        },
        main_account: {
            type: 'string',
            pattern: '^[0-9]+$',
            errorMessage: {
                type: typeError('main_account', 'string'),
            },
        },
        secondary_account: {
            type: 'string',
            pattern: '^[0-9]+$',
            errorMessage: {
                type: typeError('secondary_account', 'string'),
            },
        },
        client_id: {
            type: 'string',
            errorMessage: {
                type: typeError('client_id', 'string'),
            },
        },
    },
    required: ['cuit', 'email', 'main_account', 'secondary_account', 'client_id'],
};