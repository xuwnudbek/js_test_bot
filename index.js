const express = require("express");
const { handler } = require("./controller");

const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
    console.log("POST ");
    res.send(await handler(req));

});

app.get("*", async (req, res) => {
    res.send("<h1>Hello World!</h1>");
});


app.listen(PORT, () => {
    console.log(`Server is running: http://127.0.0.1:${PORT}`);
});



//setWebhook
//https://api.telegram.org/bot7250034737:AAH5COB4hoWn2PD1nmsO48L6BauCQabdAzA/setWebhook?url=https://8a27-37-110-214-1.ngrok-free.app