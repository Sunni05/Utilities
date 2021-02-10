const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log('READY!')
});

client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('Pong.')
    }
})

client.login(process.env.TOKEN)