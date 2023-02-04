const { Client, ChannelType, Intents, flatten} = require('discord.js');
const SoftUI = require('dbd-soft-ui');
require('dotenv').config();
let DBD = require('discord-dashboard');
const Theme = require('./theme');

const client = new Client({ intents: 131071 });
client.login(process.env.DISCORD_BOT_TOKEN);


(async ()=>{
    await DBD.useLicense(process.env.DBD_LICENSE);
    DBD.Dashboard = DBD.UpdatedClass();

    const Handler = new DBD.Handler( 
        /*
                Keyv storage instance
                Example: { store: new KeyvMongo('mongodb://user:pass@localhost:27017/dbname') }
    
                Can be left empty to use the default storage (Keyv with SQLite)
            */
        ); 

    const { Category, Option } = Handler; 

    const Dashboard = new DBD.Dashboard({
        port: process.env.PORT,
        client: {
            id: process.env.DISCORD_CLIENT_ID,
            secret: process.env.DISCORD_CLIENT_SECRET
        },
        redirectUri: `${process.env.DOMAIN}/discord/callback`,
        domain: process.env.DOMAIN,
        ownerIDs: process.env.ADMINS.split(' '),
        useTheme404: true,
        useThemeMaintenance: true,
        acceptPrivacyPolicy: true,        
        bot: client,
        theme: Theme,
        settings: [
            new Category()
            .setId('dbd')
            .setName('DBD FormTypes')
            .setDescription('DBD FormTypes')
            .setToggleable(false)
            .setImage('https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png')
            .addOptions(
                new Option()
                .setId('prefix')
                .setName('Prefix')
                .setDescription('Set the prefix for your bot')
                .setType(DBD.formTypes.input("!", 1, 3, false, false)),

                new Option()
                .setId('select')
                .setName('select')
                .setDescription('Select MultiValues')
                .setType(DBD.formTypes.select({foo: 'bar', sam: 'ple', oh: 'oh', boo: 'oob'}, false, true)),

                new Option()
                .setId('input')
                .setName('Input')
                .setDescription('Get the input value')
                .setType(DBD.formTypes.input("Hello", 1, 3, false, false)),

                new Option()
                .setId('textarea')
                .setName('Textarea')
                .setDescription('Get the textarea value')
                .setType(DBD.formTypes.textarea("Hello", 1, 256, false, false)),

                new Option()
                .setId('colorselctor')
                .setName('Color Selector')
                .setDescription('Get the color selector value')
                .setType(DBD.formTypes.colorSelect("#000000", false)),

                new Option()
                .setId('embed')
                .setName('Embed')
                .setDescription('Build an embed')
                .setType(DBD.formTypes.embedBuilder({
                    username: null,
                    avatarURL: null,
                    defaultJson: {
                        content: "Did you know that if you don't know something, you don't know it? This riddle was solved by me. Don't thank me.",
                        embed: {
                            timestamp: new Date().toISOString(),
                            url: "https://discord.com",
                            description: "There was a boar, everyone liked a boar. One day the boar ate my dinner and escaped through the chimney. I haven't seen a boar since then.",
                            author: {
                                name: "Assistants Center",
                                url: "https://assistantscenter.com",
                                icon_url: "https://media.discordapp.net/attachments/911644960590270484/934513385402413076/ac_fixed.png"
                            },
                            image: {
                                url: "https://unsplash.it/380/200"
                            },
                            footer: {
                                text: "Crated with Discord-Dashboard",
                                icon_url: "https://cdn.discordapp.com/emojis/870635912437047336.png"
                            },
                            fields: [
                                {
                                    name: "Hello",
                                    value: "Hi, Assistants Center loves you <:ac_love:806492057996230676>"
                                },
                                {
                                    name: "Do you know that",
                                    value: "You can use custom emojis there, even from server where bot isn't :Kekwlaugh:",
                                    inline: false
                                },
                            ]
                        }
                    }
                })),

                // new Option()
                // .setType(spacer),

                new Option()
                .setId('switch')
                .setName('Switch')
                .setDescription('Get the switch value')
                .setType(DBD.formTypes.switch(false)),

                new Option()
                .setId('checkbox')
                .setName('Checkbox')
                .setDescription('Get the checkbox value')
                .setType(DBD.formTypes.checkbox(false)),

                new Option()
                .setId('channelSelector')
                .setName('Channel Selector')
                .setDescription('Get the channel selector value')
                .setType(DBD.formTypes.channelsSelect(false, [ChannelType.GuildText])),

                new Option()
                .setId('roleSelector')
                .setName('Role Selector')
                .setDescription('Get the role selector value')
                .setType(DBD.formTypes.rolesSelect(false)),

                new Option()
                .setId('channelsMultiSelect')
                .setName('Channels MultiSelect')
                .setDescription('Get the channels multi select value')
                .setType(DBD.formTypes.channelsMultiSelect(false, false, [ChannelType.GuildText])),
            
                new Option()
                .setId('rolesMultiSelect')
                .setName('Roles MultiSelect')
                .setDescription('Get the roles multi select value')
                .setType(DBD.formTypes.rolesMultiSelect(false)),
            ),

            new Category()
            .setId('soft-ui')
            .setName('Soft UI FormTypes')
            .setDescription('Soft UI FormTypes')
            .setToggleable(false)
            .setImage('https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png')
            .addOptions(
                new Option()
                .setId('date')
                .setName('Date')
                .setDescription('Get the date value')
                .setType(SoftUI.formTypes.date(false)),

                new Option()
                .setId('emoji')
                .setName('Emoji')
                .setDescription('Get the emoji value')
                .setType(SoftUI.formTypes.emojiPicker(false)),


                new Option()
                .setId('multiRow')
                .setName('MultiRow')
                .setDescription('Get the multirow value')
                .setType(SoftUI.formTypes.multiRow([
                    {
                        optionId: "test1",
                        optionName: "test1",
                        optionDescription: "test1",
                        optionType: SoftUI.formTypes.numberPicker(1, 100, false),
                        getActualSet: async ({guild,user}) => {
                            // Your code here
                        },
                        setNew: async ({guild,user,newData}) => {
                            // Your code here
                        }
                    },
                    {
                        optionId: "test1",
                        optionName: "test1",
                        optionDescription: "test1",
                        optionType: SoftUI.formTypes.numberPicker(1, 100, false),
                        getActualSet: async ({guild,user}) => {
                            // Your code here
                        },
                        setNew: async ({guild,user,newData}) => {
                            // Your code here
                        }
                    },
                ])),

                new Option()
                .setId('numberPicker')
                .setName('Number Picker')
                .setDescription('Get the number picker value')
                .setType(SoftUI.formTypes.numberPicker(1, 100, false)),

                new Option()
                .setId('slider')
                .setName('Slider')
                .setDescription('Get the slider value')
                .setType(SoftUI.formTypes.slider(0, 100, 1, false)),

                new Option()
                .setId('tagInput')
                .setName('Tag Input')
                .setDescription('Get the tag input value')
                .setType(SoftUI.formTypes.tagInput(false)),

                // More to come soon :)

            ),

        ],
    });
    Dashboard.init();
})();
