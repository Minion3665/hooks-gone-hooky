"use strict";
const discord = require("discord.js");
const token = require("./token.json");

const client = new discord.Client({partials: ['MESSAGE'], presence: {status: "idle", activity: {name: "discord go by.", type: "WATCHING"}}}, );

client.on('ready', () => {
    console.log(`By Minion3665 and ClicksMinutePer, running on nodejs ${process.version} with d.js ${discord.version}`);
    console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
    console.log(`Ready to begin intercepting attacks`)
    console.log(`====================================`)
    console.log(`This bot is licensed under the GNU general public license version 3`)
    console.log(`You are permitted to modify or distribute this bot, however:`)
    console.log(`- You must also distribute the source code of your modified versions`)
    console.log(`- You must tell users if you're running a modified version, and what changes you've made`)
    console.log(`- You must credit the original author, Minion3665`)
    console.log(`- You must not use an incompatible license on your copy`)
    console.log(`- You must keep instructions to get the original version`)
    console.log(`Please also don't remove this notice`)
    console.log(`That is all. Thanks, Mini`)
    console.log(`====================================`)
    client.user.setActivity('you ping me (for help) and webhooks ping me (for raids)', {type: 'WATCHING'}).then();
 });

client.on('message', async (message) => {
    if (message.partial) await message.fetch();

    let hook = message.webhookID ? await message.fetchWebhook() : null;
    let perms = message.channel.permissionsFor(message.guild.me);
    if (hook != null) {
        let mentions = message.mentions;
        if (mentions.everyone || mentions.members.size || mentions.roles.size) {
            if (perms.has("MANAGE_WEBHOOKS")) {
                try {
                    await hook.delete("Suspected raid");
                } catch (e) {}
                if (perms.has("MANAGE_MESSAGES")) {
                    try {
                        await message.delete({reason: "Suspected raid"})
                    } catch (e) {}
                }
            }
            console.log(`Suspected raid on guild ${message.guild.name} (${message.guild.id}). 
                Full message: ${message.content}, 
                Hook name: ${hook.name}, 
                Hook PFP: ${hook.avatar}, 
                Hook ID: ${hook.id},
                My permissions: ${perms.bitfield}`);
        }
    } else if (!message.author.bot) {
        if (message.mentions.has(message.guild.me, {ignoreRoles: true, ignoreEveryone: true})) {
            if (perms.has("SEND_MESSAGES")) {
                if (perms.has("EMBED_LINKS")) {
                    await message.channel.send(
                        `Hi ${message.author}, you called?`,
                        {
                            embed: {
                                title: `Hooks gone hooky, helping secure this server since ${message.guild.joinedAt}`,
                                description: `*This bot is released as open-source under GNU-GPL 3. Read on for info about how to run your own copy*`,
                                fields: [
                                    {
                                        name: "Who are you? What do you do?",
                                        value: "I'm hooks gone hooky, a bot that detects when a webhook mentions anyone and deletes it. I do this in an attempt to stop raiding, as most " +
                                            "legitimate webhook uses *won't* mention anybody, and most illegitimate ones *will*. I'm called hooks gone hooky as all your hooks will be " +
                                            "quitting work early if they get hijacked."
                                    },
                                    {
                                        name: "How do I enable this bot?",
                                        value: "If the bot's here with manage webhooks and the ability to read messages, it's already enabled. You can " +
                                            "optionally enable manage messages and we'll delete any suspicious messages as well as removing the webhook."
                                    },
                                    {
                                        name: "How do I exclude a webhook?",
                                        value: "You can exclude a webhook by turning off our permissions to manage webhooks in its channel. If you do that " +
                                            "we won't delete it even if it starts spampinging everyone... You're on your own from here..."
                                    },
                                    {
                                        name: "How can I get a copy?",
                                        value: "You can invite the official ClicksMinutePer copy [here](https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176) " +
                                            "or clone our github repo and create another copy [here](https://github.com/Minion3665/hooks-gone-hooky)"
                                    },  // Please do not remove this field, and especially don't claim yours is the official copy
                                    {
                                        name: "Do you log anything?",
                                        value: "We log your guild ID, the message that triggered our system (including name and profile picture of the hook) and the hook's ID each time we " +
                                            "suspect a raid. This is to help us see a pattern in responses and hopefully find out who the raiders are. If you don't like that, don't use our bot"
                                    },
                                    {
                                        name: "Is it on?",
                                        value: `${perms.has("MANAGE_WEBHOOKS") ? perms.has("MANAGE_MESSAGES") ? "It is in this channel, and I'm also deleting detected messages too" : "It is in this channel. Detected messages will be kept afterwards though, so make sure your moderation team is up to handling it" : "Not in this channel..."}`

                                    }
                                ],
                                hexColor: `#F2D478`,
                                author: {
                                    name: "Written by ClicksMinutePer - click to get support",
                                    url: "https://discord.gg/bPaNnxe",
                                    iconURL: "https://clicksminuteper.net/assets/img/CMP_Logo-small.png",
                                    proxyIconURL: "https://images-ext-2.discordapp.net/external/dGgzB3hbbJoAchd0p0FwXgIkcbmq8EHa9aMMM2LcjYw/https/clicksminuteper.net/assets/img/CMP_Logo-small.png?width=330&height=330",
                                }
                            }
                        }
                    )
                } else {
                    await message.channel.send(
                        `Hi ${message.author}, you called?\n` +
                        `*This bot is released as open-source under GNU-GPL 3. Read on for info about how to run your own copy*\n` +
                        `> **Who are you? What do you do?**\n` +
                        `I'm hooks gone hooky, a bot that detects when a webhook mentions anyone and deletes it. I do this in an attempt to stop raiding, as most ` +
                        `legitimate webhook uses *won't* mention anybody, and most illegitimate ones *will*. I'm called hooks gone hooky as all your hooks will be ` +
                        `quitting work early if they get hijacked.\n` +
                        `> **How do I enable this bot?**\n` +
                        `If the bot's here with manage webhooks and the ability to read messages, it's already enabled. You can ` +
                        `optionally enable manage messages and we'll delete any suspicious messages as well as removing the webhook.\n` +
                        `> **How do I exclude a webhook?**\n` +
                        `You can exclude a webhook by turning off our permissions to manage webhooks in its channel. If you do that ` +
                        `we won't delete it even if it starts spampinging everyone... You're on your own from here...\n` +
                        `> **How can I get a copy?**\n` + // Please do not remove this part
                        `You can invite the official ClicksMinutePer copy here: https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176 ` + // Please do not remove this part
                        `or clone our github repo and create another copy here: https://github.com/Minion3665/hooks-gone-hooky\n` + // Please do not remove this part
                        `> **Do you log anything?**"\n` +
                        `We log your guild ID, the message that triggered our system (including name and profile picture of the hook) and the hook's ID each time we ` +
                        `suspect a raid. This is to help us see a pattern in responses and hopefully find out who the raiders are. If you don't like that, don't use our bot\n` +
                        `> **I need more help**\n` +
                        `Our support guild is located at https://discord.gg/bPaNnxe, see you there!\n` +
                        `> **Is it on?**\n` +
                        `${perms.has("MANAGE_WEBHOOKS") ? perms.has("MANAGE_MESSAGES") ? "It is in this channel, and I'm also deleting detected messages too" : "It is in this channel. Detected messages will be kept afterwards though, so make sure your moderation team is up to handling it" : "Not in this channel..."}`
                    );
                }
            }
        }
    }
});

client.login(token).then();
