const SoftUI = require('dbd-soft-ui');

module.exports = SoftUI({
    customThemeOptions: {
        info: async ({ config }) => {
            return {
                useUnderMaintenance: true,
                ownerIDs: [],
                blacklistIDs: [],
                premiumCard: true,
            };
            },
        index: async ({ req, res, config }) => {
            return {
                graph: {},
                cards: [],
            }
        }
    },
    websiteName: "Assistants",
    /*
    You can choose a colour scheme from the following:
    colorScheme: "dark | pink | blue | red | green | yellow",
    */
    colorScheme: "pink",
    supporteMail: "support@support.com",

    icons: {
        favicon: 'https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png',
        noGuildIcon: "https://pnggrid.com/wp-content/uploads/2021/05/Discord-Logo-Circle-1024x1024.png",
        sidebar: {
            darkUrl: 'https://assistantscenter.com/img/logo.png',
            lightUrl: 'https://assistantscenter.com/img/logo.png"',
            hideName: true,
            borderRadius: false,
            alignCenter: true
        },
    },
    index: {
        card: {
            link: {
                enabled: true,
                url: "https://google.com"
            }
        },
        graph: {
            enabled: true,
            lineGraph: false,
            tag: 'Memory (MB)',
            max: 100,
        },
    },

    premium: {
        enabled: true,
        card: {
            bgImage: "https://assistantscenter.com/wp-content/uploads/2021/11/cropped-cropped-logov6.png",
            button: {
                url: "https://patreon.com/sharkybot"
            }
        },
    },
    preloader: {
        image: "/img/soft-ui.webp",
        spinner: false,
    },
    meta: {
        author: "Plain",
        owner: "Plain",
        description: "SOFT-UI. An awesome theme for discord-dashboard created by Plain and iMidnight!",
        ogLocale: "en_US",
        ogTitle: "Soft-UI",
        ogImage: "/img/soft-ui.webp",
        ogType: "Theme",
        ogUrl: "https://assistantscenter.com",
        ogSiteName: "Soft-UI Theme",
        ogDescription: "SOFT-UI. An awesome theme for discord-dashboard created by Plain and iMidnight!",
        twitterTitle: "Soft-UI Theme",
        twitterDescription: "SOFT-UI. An awesome theme for discord-dashboard created by Plain and iMidnight!",
        twitterDomain: "",
        twitterUrl: "",
        twitterCard: "summary_large_image",
        twitterSite: "",
        twitterSiteId: "",
        twitterCreator: "",
        twitterCreatorId: "",
        twitterImage: "/img/soft-ui.png",
    },
    admin: {
        pterodactyl: {
            enabled: false,
        }
    },
    commands: [
        {
            categoryId: "starting",
            category: `Starting Up`,
            subTitle: `All helpful commands`,
            image: `<svg class="invert-img command-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
            hideSidebarItem: true,
            hideDescription: true,
            hideAlias: true,
            list: [{
                commandName: 'bug',
                commandUsage: `;bug <bug>`,
                commandDescription: 'Report a bug to the developers of Wooar.',
                commandAlias: 'No aliases'
            }
            ],
        }
    ]
})