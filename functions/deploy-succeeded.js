exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    console.log(event.body.payload);
}