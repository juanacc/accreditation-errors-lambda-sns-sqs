exports.inactiveAccountMapper = (attributes) => {
    console.log('=====================');
    console.log(attributes.Message);
    console.log('=====================');
    return ({
        cuit: attributes.Message['cuit'],
        infoAccounts: {
        email: attributes.Message['email'],
        numberMainAccount: attributes.Message['numberMainAccount'],
        cbuSecondaryAccount: attributes.Message['cbuSecondaryAccount'],
        clientId: attributes.Message['clientId'],
        },
    });
};