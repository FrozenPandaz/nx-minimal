module.exports = {
    default: async () => {
        const server = require('http-server').createServer({
            root: './website'
        });

        server.listen(8080, () => {
            console.log('Your website is available at http://localhost:8080');
        });

        return { success: true };
    }
};
