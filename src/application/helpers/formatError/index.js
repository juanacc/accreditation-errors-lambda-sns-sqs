exports.formatError = errors => 
    ({
        statusCode: 400,
        body: JSON.stringify({
            errors: errors.map(err => err.message)
        })
    });
