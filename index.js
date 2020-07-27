const request = require("node-superfetch");
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

async subreddit() {
function reddit(string) { 
if (typeof string !== "string") throw new TypeError("Type A Subreddit Please!"); 
return string;
};
   const { body: subreddit } = await request.get(`https://imgur.com/r/reddit()/hot.json`);
const data = subreddit.data[Math.floor(Math.random() * 1000)];
return data;
};
};