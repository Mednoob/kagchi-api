const axios = require("axios")

 async function nezuko() {
   const data = await axios.get("https://kagchi-api.glitch.me/waifu/nezuko").then(res => res.data.url)
  return data;
}

module.exports = { nezuko }
