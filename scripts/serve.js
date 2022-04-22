const { execFile } = require('child_process');

module.exports = {
    default: async (options, context) => {
        const serve = execFile('npx', ['http-server', context.projectName]);

        process.on('exit', () => serve.kill());
        process.on('SIGTERM', () => serve.kill());
        serve.stdout.on('data', (chunk) => {
            if (chunk.toString().indexOf('GET') === -1) {
                if (chunk.toString().indexOf('CORS') === -1) {
                    process.stdout.write(chunk);
                } else {
                    process.stdout.write(`
Your website is available at:
    http://localhost:8080
Hit CTRL-C to stop the server
`);
                }
            }
        });
        serve.stderr.on('data', (chunk) => {
            process.stderr.write(chunk);
        });

        return new Promise((res) => {
            serve.on('exit', (code) => {
                if (code == 0) {
                    res({ success: true });
                } else {
                    res({ success: false });
                }
            });
        });
    }
};
