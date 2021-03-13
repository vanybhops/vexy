const embedcolors = require("../embedcolors.json");
const Discord = require("discord.js");
const config = require("../config.json");
const package = require("../package.json");
exports.run = (bot, message ,args) => {
  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  message.edit("Hacking.");
  async function feethack(){
    await sleep(500);
    message.edit("Hacking..");
    await sleep(500);
    message.edit("Hacking...");
    await sleep(500);
    message.edit("Hacking.");
    await sleep(500);
    message.edit("Hacking..");
    await sleep(500);
    message.edit("Hacking...");
    m=message
    m.edit("asking "+args+" for feet pics in progress.");
    await sleep(500);
    m.edit("asking "+args+" for feet pics in progress..");
    await sleep(500);
    m.edit("asking "+args+" for feet pics in progress...");
    await sleep(500);
    m.edit("asking "+args+" for feet pics in progress.");
    await sleep(500);
    m.edit("asking "+args+" for feet pics in progress..");
    await sleep(500);
    m.edit("asking "+args+" for feet pics in progress...");
    await sleep(500);
    m.edit("asking "+args+" for feet pics succesful");
    await sleep(500);
    m.edit("returning feet pics to our database 0%");
    await sleep(500);
    m.edit("returning feet pics to our database 10%");
    await sleep(500);
    m.edit("returning feet pics to our database 40%");
    await sleep(500);
    m.edit("returning feet pics to our database 70%");
    await sleep(4000);
    m.edit("returning feet pics to our database 100%");
    await sleep(500);
    m.edit(args+" feet pics hacked by Asmir begic",);
  }
  feethack();
}

exports.help = {
  name: "hack",
  description: "Hacking someone u dont like.",
  usage: "hack @tag"
}

exports.config = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
