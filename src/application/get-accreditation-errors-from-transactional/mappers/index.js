exports.transactionalAccreditationErrorsMapper = (attributes) => ({
    cuit: attributes.cuit,
    email: attributes.email,
    mainAccount: attributes.main_account,
    secondaryAccount: attributes.secondary_account,
    clientId: attributes.client_id,
});