exports.transactionalAccreditationErrorsMapper = (attributes) => ({
    cuit: attributes.cuit,
    email: attributes.email,
    numberMainAccount: attributes.number_main_account,
    cbuSecondaryAccount: attributes.cbu_secondary_account,
    clientId: attributes.client_id,
});