# Project Archived.
This project was archived because there is nothing else I need to add, the project is complete.
# dscsb
Simple Discord selfbot for editing your game activity
## WARNING
THIS IDEA OF A SELF-BOT ON DISCORD IS AGAINST THE TERMS OF SERVICE.
STATED HERE: https://support.discord.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-
THE DISCORD TRUST AND SAFETY TEAM'S STANCE IS:
Automating normal user accounts (generally called "self-bots") outside of the OAuth2/bot API is forbidden, and can result in an account termination if found.
USING THIS REPOSITORY IS A RISK YOU DECIDE TO MAKE. I (ginlang) AM NOT RESPONSIBLE IF YOUR DISCORD ACCOUNT IS TERMINATED.
## How to use
1. Clone this repository by running `git clone https://github.com/business-fox/dscsb`
2. Copy the "config.json.example" to "config.json"
3. Add your token to the config.json file (tutorial [here](https://www.youtube.com/watch?v=Eb_AxTYclq4))
4. Configure the rest of the config.json as you please
5. To actually run this program, make sure you have node.js installed, and run `npm i` in the repository's root directory.
6. Finally, you should now be able to simply run `node .` and the program should work.
## Configuration
1. Token (your token, duhh.)
2. Activity (what will be shown as your status, e.g "playing Grand Theft Auto VI")
3. Type (the type of activity, e.g "competing in Grand Theft Auto VI", valid types are PLAYING, WATCHING, STREAMING, LISTENING and COMPETING)
4. URL (this is only useful if you are using the STREAMING type, the "Watch on Twitch" button will redirect to this URL)
