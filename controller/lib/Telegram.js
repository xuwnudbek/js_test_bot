const TelegramBot = require("node-telegram-bot-api");
const { axiosInstance } = require("./axios");

function sendMessage(messageObject, text) {
    return axiosInstance.get('sendMessage', {
        chat_id: messageObject.chat.id,
        text: text,
    });
}

function handleMessage(messageObject) {
    const messageText = messageObject.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substr(0);

        switch (command) {
            case "start":
                return sendMessage(
                    messageObject,
                    "Nma gap, bratishka!"
                );

            case "help":
                return sendMessage(
                    messageObject,
                    "Nma yordam kerak, bratishka!"
                );

            default:
                return sendMessage(
                    messageObject,
                    "Bunaqa command yo'q, bratishka!"
                );
        }

    } else {
        return sendMessage(messageObject, messageText);
    }

}

module.exports = { handleMessage };