const config = require('./config.json');
const { Client, ActivityType } = require("discord.js-selfbot");
const client = new Client();
console.log("Loading, this may take up to 10 seconds...");
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    if(Boolean(config.activity)){
        client.user.setActivity(config.activity);
    }
});
client.login(config.token)