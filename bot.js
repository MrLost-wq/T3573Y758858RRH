const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(Logged in as ${client.user.tag}!);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(💔Everything Broken.., {
type: "STREAMING",
url: "https://www.twitch.tv/ninja%22%7D)
    .then(presence => console.log(Your Status has been set to  ${presence.game ? presence.game.none : 'none'}))
    .catch(console.error);
});

client.login('TOKEN');
