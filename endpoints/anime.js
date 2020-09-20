const axios = require("axios")

 async function baka() {
   const data = await axios.get("https://nekos.life/api/v2/img/baka").then(res => res.url)
  return data;
}

 async function pat() {
   const data = await axios.get("https://nekos.life/api/v2/img/pat").then(res => res.url)
  return data;
}

 async function feed() {
   const data = await axios.get("https://nekos.life/api/v2/img/feed").then(res => res.url)
  return data;
}
 async function trap() {
    const data = await axios.get("https://nekos.life/api/v2/img/trap").then(res => res.url)
   return data;
}

 async function poke() {
    const data = await axios.get("https://nekos.life/api/v2/img/poke").then(res => res.url)
   return data;
}
 
 async function kiss() {
    const data = await axios.get("https://nekos.life/api/v2/img/kiss").then(res => res.url)
   return data;
}

 async function cuddle() {
    const data = await axios.get("https://nekos.life/api/v2/img/cuddle").then(res => res.url)
   return data;
}

 async function search(query) {
     const data = await axios.get("https://api.jikan.moe/v3/search/anime?q=" + query).then(res => res.data.results)
    return data;
}

module.exports = { baka, pat, feed, trap, poke, kiss, cuddle, search }
