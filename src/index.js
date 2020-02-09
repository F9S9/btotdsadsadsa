const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "Njc2MTA4NzQ1MDgzOTc3NzI5.XkA5fg.wzXXCtN-4ksVq72gmhmhl2GRaJk";

bot.on("ready", () => {
  console.log("bot is working");
});

bot.login(token);
