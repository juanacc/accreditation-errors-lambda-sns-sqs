exports.inactiveAccountMapper = (attributes) => {
    console.log('=====================');
    console.log(JSON.parse(attributes.Message));
    console.log('=====================');
    const attributesJson = JSON.parse(attributes.Message);
    return ({
        cuit: attributesJson.cuit,
        infoAccounts: {
            email: attributesJson.email,
            number_main_account: attributesJson.number_main_account,
            cbu_secondary_account: attributesJson.cbu_secondary_account,
            client_id: attributesJson.client_id,
        },
    });
};