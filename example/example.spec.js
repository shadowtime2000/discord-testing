/* eslint-disable no-undef */
const { Client } = require("discord.js");

const { channelMsg, channelEmbed, dmMsg, dmEmbed } = require("../src/index");

const client = new Client();

const exampleEmbed = {
    color: 0x0099ff,
    title: 'Some title',
    url: 'https://discord.js.org',
    author: {
        name: 'Some name',
        icon_url: 'https://i.imgur.com/wSTFkRM.png',
        url: 'https://discord.js.org',
    },
    description: 'Some description here',
    thumbnail: {
        url: 'https://i.imgur.com/wSTFkRM.png',
    },
    fields: [
        {
            name: 'Regular field title',
            value: 'Some value here',
        },
        {
            name: '\u200b',
            value: '\u200b',
            inline: false,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
        {
            name: 'Inline field title',
            value: 'Some value here',
            inline: true,
        },
    ],
    image: {
        url: 'https://i.imgur.com/wSTFkRM.png',
    },
    timestamp: new Date(),
    footer: {
        text: 'Some footer text here',
        icon_url: 'https://i.imgur.com/wSTFkRM.png',
    },
};

client.on("message", (message) => {
    if (!message.channel && message.content === "help") { return message.author.send("help is here") }
    if (!message.channel) {return message.author.send({ embed: exampleEmbed})}
    if (message.content === "help") { return message.channel.send("help is here") }
    return message.channel.send({ embed: exampleEmbed })
})

describe("#Bot", () => {

    after(() => {
        client.destroy();
    })

    describe("'help' command - guild", () => {
        it("should respond with 'help is here'", () => {
            channelMsg("help", client).response.toBe("help is here")
        })
        it ("should match [a-zA-Z ]+ regex", () => {
            channelMsg("help", client).response.toMatch(/[a-zA-Z ]+/)
        })
    })
    describe("embed message - guild", () => {
        it("should give the correct title", () => {
            channelEmbed("", client).response.title.toBe("Some title")
        })
        it("should give the correct url", () => {
            channelEmbed("", client).response.url.toBe("https://discord.js.org")
        })
        it("should give the correct color", () => {
            channelEmbed("", client).response.color.toBe(0x0099ff)
        })
        describe("should give the correct author", () => {
            it("should give the correct author name", () => {
                channelEmbed("", client).response.author.name.toBe("Some name")
            })
            it("should give the correct author icon url", () => {
                channelEmbed("", client).response.author.icon_url.toBe("https://i.imgur.com/wSTFkRM.png")
            })
            it("should give the correct author url", () => {
                channelEmbed("", client).response.author.url.toBe("https://discord.js.org")
            })
        })
        it("should give the correct description", () => {
            channelEmbed("", client).response.description.toBe("Some description here")
        })
        it("should give the correct thumbnail url", () => {
            channelEmbed("", client).response.thumbnail.url.toBe("https://i.imgur.com/wSTFkRM.png")
        })
        it("should give the correct image url", () => {
            channelEmbed("", client).response.image.url.toBe("https://i.imgur.com/wSTFkRM.png")
        })
        describe("should give the correct footer", () => {
            it("should give the correct footer text", () => {
                channelEmbed("", client).response.footer.text.toBe("Some footer text here")
            })
            it("should give the correct footer icon url", () => {
                channelEmbed("", client).response.footer.icon_url.toBe("https://i.imgur.com/wSTFkRM.png")
            })
        })
    })
    describe("'help' command - DM", () => {
        it("should respond with 'help is here'", () => {
            dmMsg("help", client).response.toBe("help is here")
        })
        it("should match [a-zA-Z ]+ regex", () => {
            channelMsg("help", client).response.toMatch(/[a-zA-Z ]+/)
        })
    })
    describe("embed message - dm", () => {
        it("should give the correct title", () => {
            dmEmbed("", client).response.title.toBe("Some title")
        })
        it("should give the correct url", () => {
            dmEmbed("", client).response.url.toBe("https://discord.js.org")
        })
        it("should give the correct color", () => {
            dmEmbed("", client).response.color.toBe(0x0099ff)
        })
        describe("should give the correct author", () => {
            it("should give the correct author name", () => {
                dmEmbed("", client).response.author.name.toBe("Some name")
            })
            it("should give the correct author icon url", () => {
                dmEmbed("", client).response.author.icon_url.toBe("https://i.imgur.com/wSTFkRM.png")
            })
            it("should give the correct author url", () => {
                dmEmbed("", client).response.author.url.toBe("https://discord.js.org")
            })
        })
        it("should give the correct description", () => {
            dmEmbed("", client).response.description.toBe("Some description here")
        })
        it("should give the correct thumbnail url", () => {
            dmEmbed("", client).response.thumbnail.url.toBe("https://i.imgur.com/wSTFkRM.png")
        })
        it("should give the correct image url", () => {
            dmEmbed("", client).response.image.url.toBe("https://i.imgur.com/wSTFkRM.png")
        })
        describe("should give the correct footer", () => {
            it("should give the correct footer text", () => {
                dmEmbed("", client).response.footer.text.toBe("Some footer text here")
            })
            it("should give the correct footer icon url", () => {
                dmEmbed("", client).response.footer.icon_url.toBe("https://i.imgur.com/wSTFkRM.png")
            })
        })
    })
})