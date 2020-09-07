*This bot is released as open-source under GNU-GPL 3. Read on for info about how to run your own copy*

## Who are you? What do you do?
I'm hooks gone hooky, a bot that detects when a webhook mentions anyone and deletes it. I do this in an attempt to stop raiding, as most legitimate webhook uses won't mention anybody, and most illegitimate ones will. I'm called hooks gone hooky as all your hooks will be quitting work early if they get hijacked.

## How do I enable this bot?
If the bot's here with manage webhooks and the ability to read messages, it's already enabled. You can optionally enable manage messages and we'll delete any suspicious messages as well as removing the webhook.

## How do I exclude a webhook?
You can exclude a webhook by turning off our permissions to manage webhooks in its channel. If you do that we won't delete it even if it starts spampinging everyone... You're on your own from here...

## Do you log anything?
We log your guild ID, the message that triggered our system (including name and profile picture of the hook) and the hook's ID each time we suspect a raid. This is to help us see a pattern in responses and hopefully find out who the raiders are. If you don't like that, don't use our bot

## How can I get more help?
Come [join our guild on discord](https://discord.gg/bPaNnxe)

## How can I get a copy?
You can [invite the official ClicksMinutePer copy](https://discord.com/oauth2/authorize?client_id=752188923505279037&scope=bot&permissions=536882176) or follow the below instructions to run your own copy
1) [Install nodejs v14.9.0](https://nodejs.org/en/download/current/) and [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your system 
2) Clone this repository and move into the created directory
```bash
git clone https://github.com/Minion3665/hooks-gone-hooky
cd hooks-gone-hooky
```
3) Install the required modules
```
npm install 
```
4) Create a file called `token.json`, and write your token into it surrounded by speech marks
For example, if your token was `token`, you would put into the file
```
"token"
```
5) Run the bot
```
node index.js
```
