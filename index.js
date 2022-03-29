const { Client, Collection, Activity } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;

// 전역변수
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// 프로젝트 준비
require("./handler")(client);

client.login(client.config.token);
client.on("ready", () => {
    console.log(`${client.user.tag} iS uP aNd ReAdY tO gO!`);
});