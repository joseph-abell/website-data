const axios = require('axios');

exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commit_ref;
    console.info('Commit Ref:', commitRef)
    const url = `https://api.github.com/repos/joseph-abell/website-data/commits/${commitRef}`;
    const data = await axios(url)
    console.log(url)
    console.log(data);
}