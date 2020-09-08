# discord-testing
A testing library for Discord.js bots

## Getting Started

### Installation
`npm i discord-testing`

### Usage
An extremely simple usage of `discord-testing` is this:
```javascript
const { channelMsg } = require("discord-testing")
const { Client } = require("discord.js")

const client = new Client()

client.on("message", (msg) => {
    if (msg.content === "ping") {
        msg.channel.send("pong")
    } 
})

describe("#Bot", () => {

    after(() => {
        client.destroy() // You need this or you will leave your test run hanging
    })

    it("should message 'pong' when you say 'ping'", () => {
        channelMsg("ping", client).response.toBe("pong")
    })
})
```
Of course to keep yourself more organized you may want to export your bot from another file and import it in your test file.
**NOTE!** You do not need to log your bot using your bot token in order to be able to test your bot.

## Docs

### `.attempt(expression)`
This is a very basic assertion function that is used under the hood for all activities.

### `.channelMsg(content, bot, author = null)`
You can use this function to test the output of commands when used in guilds. The output must be sent through the same channel.

### `.channelEmbed(content, bot, author = null)`
Same as `.channelMsg()` but this will expect an embed object to output in the same channel.

### `.dmMsg(content, bot, author = null)`
This will simulate a direct message with the content being sent to the bot. The output must be given in the same DM.

### `.dmEmbed(content, bot, author = null)`
This will do the same as `.dmMsg()` but will expect an embed object as an output.

## Example
You can download this project with `git clone` and then use `npm run example` to try out the example test suite that is located under `example/`

## Contribution
If you want to contribute, you can just open a pull request with your changes. If it is a new test function, please also add its usage in `example/example.spec.js` so that people will be able to see the sucess of the new function.