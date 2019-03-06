const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let dm = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail: I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(dm);

let helpembed = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(`Commands & Guides`, bot.user.avatarURL)
    .addField(`:desktop: General Commands`, `!help - Show a list of commands & guides to your DM.\n!ping - Show the current bot ping/ms.\n!verify/verification - Verify your discord account.\n!botinfo - Shows the information of the bot.\n!serverinfo - Shows the information of the guild.\n!8ball [Question] - A fun command that answer your question.`)
    .setTimestamp()
    message.author.send(helpembed);

}
module.exports.help = {
  name: "help"
}
