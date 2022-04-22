module.exports = {
    default: async () => {
        const serve = require('child_process').execFile('npx', ['http-server', 'website'], {
        });
        process.on('exit', serve.kill());
        process.on('SIGTERM', serve.kill());
        serve.stdout.on('data', (chunk) => {
            if (chunk.toString().indexOf('GET') === -1) {
                process.stdout.write(chunk);
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
