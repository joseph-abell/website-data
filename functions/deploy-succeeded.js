const axios = require('axios');

exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commit_ref;
    const url = `https://api.github.com/repos/joseph-abell/website-data/commits/${commitRef}`;
    const {data} = await axios(url)
    const { files } = data;
    files && files.filter(file => file.filename.includes('.mdx')).map(file => {
        console.log(file.status);
    })
}