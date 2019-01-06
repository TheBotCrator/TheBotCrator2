const Discord = require ('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json')
client.on('ready',() => {
    console.log('I\'m Online');
})

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Pong!');

    }
});

client.login(settings.token);
