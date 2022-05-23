const {inactiveAccountMapper} = require('../mappers')

module.exports.handler = async (event, context, callback) => {
    console.log('Running lambda function to read SQS data');
    console.log(context);
    console.log('The event records data');
    console.log(event.Records);
    
    const dataInactivateAccount = inactiveAccountMapper(
        JSON.parse(event.Records[0].body),
    );

    console.log('Data Inactivate Account: ', JSON.parse(event.Records[0].body));
    // inactiveAccountInteractor(
    //     dataInactivateAccount.cuit,
    //     dataInactivateAccount.infoAccounts,
    // )
    //     .then((_) => callback())
    //     .catch((err) => callback(err));
    callback(null, 'Success');
};