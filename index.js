const request = require("node-superfetch");
const axios = require("axios");
const url = "https://imgur.com/r/"
const { author, version } = require("./package.json");
module.exports = class KagApi {
  constructor() {
    this.version = version;
    this.author = author;
  }
  async wikihow() {
    const { body: wikihow } = await request.get(
      "https://kagchi-api.glitch.me/wikihow"
    );
    return wikihow;
  };
  async coin() {
    const { body: coin } = await request.get(
      "https://kagchi-api.glitch.me/coin"
    );
    return coin;
  };
  async user() {
    const { body: user } = await request.get(
      "https://kagchi-api.glitch.me/users"
    );
    return user.users[0];
  };
  async memeindo() {
    const { body: memeindo } = await request.get(
      "https://kagchi-api.glitch.me/meme/indonesia"
    );
    return memeindo;
  };
  async memes() {
    const { body: memes } = await request.get(
      "https://kagchi-api.glitch.me/meme/memes"
    );
    return memes;
  };
  async dankmemes() {
    const { body: dankmemes } = await request.get(
      "https://kagchi-api.glitch.me/meme/dankmemes"
    );
    return dankmemes;
  };
  async coronamemes() {
    const { body: coronamemes } = await request.get(
      "https://kagchi-api.glitch.me/meme/coronamemes"
    );
    return coronamemes;
  };

async subreddit(reddit) {
if (!reddit) throw Error('Please enter subreddit');
   const { body: subreddits } = await request.get(url + reddit + "/hot.json")
  if (typeof reddit !== 'string') throw Error('The value of async function find isn\'t a string!');
    const data = subreddits.data[Math.floor(Math.random() * 1000)];
return data;
};
};
