const config = require('./config.json');
const { Client, ActivityType } = require("discord.js-selfbot");
const client = new Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setStatus(config.status);
    client.user.setActivity(config.activity);
});
client.login(config.token)