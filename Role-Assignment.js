const token = 
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.on('ready', ()=> {console.log('The bot is now online!');});

client.on('message', message =>{

    if(message.content.toLowerCase().startswith("!addrole"))
    {
        var args = message.content.toLowerCase().split(" ");
        console.log(args);
        if(args[1] === 'role 1')
        {
            var role = message.guild.roles.find('name', 'specific role');
        }
        else if (args[1] === 'role 2')
    
        {

        }

        else if 
        {

        }

    }


});