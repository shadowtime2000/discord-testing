const { AssertionError } = require("assert");

function attempt(expression, message = "Expression does not evaluate to true") {
  if (expression === true) return;

  throw new AssertionError({ message });
}

function channelMsg(content, bot, author = null) {
  let res = "";
  bot.emit("message", {
    author,
    content,
    channel: {
      send: (msg) => {
        res = msg;
      },
    },
  });
  return {
    response: {
      toBe(m) {
        attempt(res === m, "Response does not match");
      },
      toMatch(regex) {
        attempt(regex.test(res), "Regex does not match");
      },
    },
  };
}

function channelEmbed(content, bot, author = null) {
  let res = {};
  bot.emit("message", {
    author,
    content,
    channel: {
      send: (msg) => {
        res = msg;
      },
    },
  });
  return {
    response: {
      title: {
        toBe(t) {
          attempt(res.embed.title === t, "Title does not match");
        },
        toMatch(regex) {
          attempt(regex.test(res.embed), "Regex does not match to title");
        },
      },
      color: {
        toBe(c) {
          attempt(res.embed.color === c, "Color does not match");
        },
      },
      author: {
        name: {
          toBe(n) {
            attempt(res.embed.author.name === n, "Author name does not match");
          },
          toMatch(regex) {
            attempt(
              regex.test(res.embed.author.name),
              "Regex does not match to author name"
            );
          },
        },
        icon_url: {
          toBe(url) {
            attempt(
              res.embed.author.icon_url === url,
              "Icon URL does not match"
            );
          },
        },
        url: {
          toBe(u) {
            attempt(res.embed.author.url === u, "URL does not match");
          },
        },
      },
      description: {
        toBe(d) {
          attempt(d === res.embed.description, "Description does not match");
        },
        toMatch(regex) {
          attempt(
            regex.test(res.embed.description),
            "Regex does not match to description"
          );
        },
      },
      thumbnail: {
        url: {
          toBe(u) {
            attempt(u === res.embed.thumbnail.url, "URL does not match");
          },
        },
      },
      fields: {
        toInclude(e) {
          attempt(
            res.embed.fields.includes(e),
            "Fields does not include element"
          );
        },
        toBe(f) {
          attempt(f === res.embed.fields, "Fields does not match");
        },
      },
      image: {
        url: {
          toBe(u) {
            attempt(u === res.embed.image.url, "URL does not match");
          },
        },
      },
      timestamp: {
        toBe(t) {
          attempt(t === res.embed.timestamp, "Timestamp does not match");
        },
      },
      url: {
        toBe(u) {
          attempt(u === res.embed.url, "URL does not match");
        },
      },
      footer: {
        text: {
          toBe(t) {
            attempt(t === res.embed.footer.text, "Footer text does not match");
          },
          toMatch(regex) {
            attempt(
              regex.test(res.embed.footer.text),
              "Regex does not match footer text"
            );
          },
        },
        icon_url: {
          toBe(u) {
            attempt(u === res.embed.footer.icon_url, "Icon URL does not match");
          },
        },
      },
    },
  };
}

function dmMsg(content, bot, author = null) {
  let res = "";
  bot.emit("message", {
    content,
    author: {
      ...author,
      send: (msg) => {
        res = msg;
      },
    },
  });

  return {
    response: {
      toBe(m) {
        attempt(res === m, "Response does not match")
      },
      toMatch(regex) {
        attempt(regex.test(res), "Regex does not match")
      }
    }
  }
}

function dmEmbed(content, bot, author = null) {
  let res = {};
  bot.emit("message", {
    content,
    author: {
      ...author,
      send: (msg) => {
        res = msg;
      },
    },
  });
  return {
    response: {
      title: {
        toBe(t) {
          attempt(res.embed.title === t, "Title does not match");
        },
        toMatch(regex) {
          attempt(regex.test(res.embed), "Regex does not match to title");
        },
      },
      color: {
        toBe(c) {
          attempt(res.embed.color === c, "Color does not match");
        },
      },
      author: {
        name: {
          toBe(n) {
            attempt(res.embed.author.name === n, "Author name does not match");
          },
          toMatch(regex) {
            attempt(
              regex.test(res.embed.author.name),
              "Regex does not match to author name"
            );
          },
        },
        icon_url: {
          toBe(url) {
            attempt(
              res.embed.author.icon_url === url,
              "Icon URL does not match"
            );
          },
        },
        url: {
          toBe(u) {
            attempt(res.embed.author.url === u, "URL does not match");
          },
        },
      },
      description: {
        toBe(d) {
          attempt(d === res.embed.description, "Description does not match");
        },
        toMatch(regex) {
          attempt(
            regex.test(res.embed.description),
            "Regex does not match to description"
          );
        },
      },
      thumbnail: {
        url: {
          toBe(u) {
            attempt(u === res.embed.thumbnail.url, "URL does not match");
          },
        },
      },
      fields: {
        toInclude(e) {
          attempt(
            res.embed.fields.includes(e),
            "Fields does not include element"
          );
        },
        toBe(f) {
          attempt(f === res.embed.fields, "Fields does not match");
        },
      },
      image: {
        url: {
          toBe(u) {
            attempt(u === res.embed.image.url, "URL does not match");
          },
        },
      },
      timestamp: {
        toBe(t) {
          attempt(t === res.embed.timestamp, "Timestamp does not match");
        },
      },
      url: {
        toBe(u) {
          attempt(u === res.embed.url, "URL does not match");
        },
      },
      footer: {
        text: {
          toBe(t) {
            attempt(t === res.embed.footer.text, "Footer text does not match");
          },
          toMatch(regex) {
            attempt(
              regex.test(res.embed.footer.text),
              "Regex does not match footer text"
            );
          },
        },
        icon_url: {
          toBe(u) {
            attempt(u === res.embed.footer.icon_url, "Icon URL does not match");
          },
        },
      },
    },
  };
}

module.exports = { attempt, channelMsg, channelEmbed, dmMsg, dmEmbed };
