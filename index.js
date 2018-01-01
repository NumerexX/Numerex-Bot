const Discord = require('discord.js');

const commando = require('discord.js-commando');
const bot = new commando.Client();
const PREFIX = "/"

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.on("Im ready, Numerex daddy < 3", function() 
{
    console.log("Im ready nigga.");
})

bot.on('message', (message) => {
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) 
    {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "cmds":
        var embed = new Discord.RichEmbed()
            .setTitle("Xenon's commands list")
            .addField("Ping", "The bot will message back 'Pong!'", true)
            .setFooter("CMDs list!")
            .setColor(0xff0000)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command you idiot! >:D");
    }

})

bot.login(process.env.BOT_TOKEN);
