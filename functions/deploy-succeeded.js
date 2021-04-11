exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commit_ref;
    console.log('Commit Ref:', commitRef)
    console.log(process.env.GITHUB_API_KEY);
}