const config = require('./config.json');
const { Client, ActivityType } = require("freeze-selfbot");
const client = new Client();
console.log(`Loading dscsb with config Activity: ${config.activity}, Type: ${config.type} and URL: ${config.url}`);
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    if(config.activity){
        client.user.setActivity(config.activity,{type: (config.type), url: (config.url)});
    }
});
client.login(config.token)