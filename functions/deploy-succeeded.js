import https from 'https';

exports.handler = async (event, context) => {
    console.info('Deploy Succeeded')
    const body = JSON.parse(event.body);
    const commitRef = body.payload.commit_ref;
    console.info('Commit Ref:', commitRef)
    https.get(`https://api.github.com/repos/joseph-abell/website-data/commits/${commitRef}`, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            console.log(d);
        });
    });
}