const Discord = require('discord.js');
const client = new Discord.Client();

client.login('YOUR TOKEN');

client.on('message', msg => {
    if (msg.channel.name !== 'CHAT, IN WHICH BOT IS SUPPOSED TO BE INVOKED') {
        if (msg.content.toLowerCase().startsWith('!play')){
            msg.member.voice.setMute(true)
                .then(() => {
                    msg.reply('MESSAGE, THAT WILL BE SENT, WHEN THE USER IS MUTED');
                    setTimeout(() => {
                        msg.member.voice.setMute(false)
                            .then(() => msg.reply('MESSAGE, THAT WILL BE SENT, WHEN THE USER IS UNMUTED'));
                    }, 15 * 60 * 1000);
                });
        }
    }
});
