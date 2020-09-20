const axios = require("axios")

 async baka() {
   const data = await axios.get("https://nekos.life/api/v2/img/baka").then(res => res.url)
  return data;
}

 async pat() {
   const data = await axios.get("https://nekos.life/api/v2/img/pat").then(res => res.url)
  return data;
}

 async feed() {
   const data = await axios.get("https://nekos.life/api/v2/img/feed").then(res => res.url)
  return data;
}
 async trap() {
    const data = await axios.get("https://nekos.life/api/v2/img/trap").then(res => res.url)
   return data;
}

 async poke() {
    const data = await axios.get("https://nekos.life/api/v2/img/poke").then(res => res.url)
   return data;
}
 
 async kiss() {
    const data = await axios.get("https://nekos.life/api/v2/img/kiss").then(res => res.url)
   return data;
}

 async cuddle() {
    const data = await axios.get("https://nekos.life/api/v2/img/cuddle").then(res => res.url)
   return data;
}

module.exports = { baka, pat, feed, trap, poke, kiss, cuddle }
