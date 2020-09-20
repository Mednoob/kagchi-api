const axios = require("axios");

async kawaii() {
  const data = await axios.get("https://api.lolis.life/kawaii").then(res => res.data)
 return data;
}

async random() {
  const data = await axios.get("https://api.lolis.life/random?nsfw=false").then(res => res.data)
 return data;
}

async neko() {
  const data = await axios.get("https://api.lolis.life/neko").then(res => res.data)
 return data;
}

async pat() {
   const data = await axios.get("https://api.lolis.life/pat").then(res => res.data)
  return data;
}

module.exports = { kawaii, random, neko, pat }
