const axios = require('axios');
const AWSAppSyncClient = require('aws-appsync');

exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commit_ref;
    const url = `https://api.github.com/repos/joseph-abell/website-data/commits/${commitRef}`;
    const {data} = await axios(url)
    const { files } = data;
    if (files) {
        const client = new AWSAppSyncClient({
            url: process.env.APPSYNC_URL,
            region: 'eu-west-2',
            auth: {
              type: "API_KEY",
              apiKey: process.env.APPSYNC_API_KEY,
            }
        })

        console.log(client);

        files.filter(file => file.filename.includes('.mdx')).map(file => {
            switch (file.status) {
                case "added":
                    console.log('added', file.filename);
                    break;
                case "removed":
                    console.log('removed', file.filename);
                    break;
                case "modified":
                    console.log('modified', file.filename);
                    break;
                default:
                    return;
            }
        })
    }
}