const {Client, GatewayIntentBits, Partials} = require('discord.js')
const config = require('./config.js')

const intents = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
];
const client = new Client({intents : intents})

client.on('ready', async => {
    console.log('${client.user.username} est en ligne !')
})

client.login(config.token)