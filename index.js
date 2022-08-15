const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds
    ]
});

client.on("ready", () => {
    console.log("bot opérationnel")
});

client.login("MTAwODU5OTQ0OTU2MTQ2NDkwMw.GnhiPw.GYINSp-lLHI7SNBmFK4kMo1NetGzZdwXHrPhGQ")