const axios = require("axios")

 async function nezuko() {
   const data = await axios.get("https://kagchi-api.glitch.me/waifu/nezuko").then(res => res.data.url)
  return data;
}
 async function random() {
   const data = await axios.get("https://nekos.life/api/v2/img/waifu").then(res => res.data.url)
  return data;
}

module.exports = { nezuko, random }
