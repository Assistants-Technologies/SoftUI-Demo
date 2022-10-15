const dotenv = require('dotenv');
dotenv.config();

const Discord = require('discord.js');
const Theme = require('./theme');

const { Client } = Discord;
let client;

if (parseInt(Discord.version) < 14) client = new Client({ intents: [Discord.Intents.FLAGS.GUILDS] });
else client = new Client({ intents: [Discord.GatewayIntentBits.Guilds] });

client.login(process.env.DISCORD_BOT_TOKEN);

(async () => {
    let DBD = require('discord-dashboard');
    await DBD.useLicense(process.env.DBD_LICENSE);
    DBD.Dashboard = DBD.UpdatedClass();

    const Dashboard = new DBD.Dashboard({
        port: process.env.PORT,
        client: {
            id: process.env.DISCORD_CLIENT_ID,
            secret: process.env.DISCORD_CLIENT_SECRET
        },
        redirectUri: `${process.env.DOMAIN}/discord/callback`,
        domain: process.env.DOMAIN,
        settings: [],
        ownerIDs: process.env.ADMINS.split(' '),
        bot: client,
        theme: Theme,
        acceptPrivacyPolicy: true,
    });
    Dashboard.init();
})();