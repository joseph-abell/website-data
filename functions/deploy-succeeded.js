exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commitRef;
    console.log('Commit Ref:', commitRef);
}