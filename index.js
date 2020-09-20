const request = require("node-superfetch");
const { author, version } = require("./package.json");
let loli = require("./endpoints/loli.js");
let anime = require("./endpoints/anime.js");
let waifu = require("./endpoints/waifu.js");
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
      const { body: subreddit } = await request.get("https://kagchi-api.glitch.me/subreddit/" + reddit)
    return subreddit;
  };
module.exports = { wikihow, coin, userinfo, memeindo, memes, dankmemes, coronamemes, subreddit, author, version ,loli, anime, waifu }
