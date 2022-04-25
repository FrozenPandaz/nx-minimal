module.exports = async function (options, context) {
    const {duration} = options;
    const {projectName} = context;

    console.log(`Toasting ${projectName} for ${duration / 1000} seconds`);

    await new Promise(res => setTimeout(res, duration));

    console.log(`Toasted ${projectName}`);

    return {
        success: true
    }
}
