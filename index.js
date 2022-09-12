const config = require('./config.json');
const { Client, ActivityType } = require("freeze-selfbot");
const client = new Client();
console.log(`Loading dscsb with config Activity: ${config.activity}, Type: ${config.type} and URL: ${config.url}`);
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    if(config.activity){
        if(config.type = "STREAMING"){
            client.user.setActivity(config.activity,{type: "STREAMING", url: (config.url)});
        }
        client.user.setActivity(config.activity,{type: (config.type)});
    }
});
client.login(config.token)