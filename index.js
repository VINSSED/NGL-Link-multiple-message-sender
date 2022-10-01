const axios = require("axios");
const config = require("./config.json");

for (let i = 0; i < config.no_of_messages; i++) {
  sendMessage();
}
async function sendMessage() {
  await axios.post(`https://ngl.link/${config.ngl_username}`, {
    question: config.question,
    deviceId: "0cdf-23df-sdbr-02y4",
  });
}
