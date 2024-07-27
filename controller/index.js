const { handleMessage } = require("./lib/Telegram");

async function handler(req, method) {
    const { body } = req;

    if (body) {
        messageObj = body.message;
        console.log(messageObj);
        await handleMessage(messageObj);
    } else {
        console.log("Nimadur xato ketutti!");
    }

    return;
}

module.exports = { handler }