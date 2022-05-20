exports.inactiveAccountMapper = (attributes) => {
    console.log('=====================');
    console.log(attributes.Message);
    console.log('=====================');
    return ({
        cuit: attributes.Message['cuit'],
        infoAccounts: {
        email: attributes.Message['email'],
        mainAccount: attributes.Message['mainAccount'],
        secondaryAccount: attributes.Message['secondaryAccount'],
        clientId: attributes.Message['clientId'],
        },
    });
};