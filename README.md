## Installation

To Use Api Install Package First
```bash
npm install @kagchi/kag-api
yarn add @kagchi/kag-api
```

<details>
<summary>Changelog</summary>
<br>
  Changelog V1.1.2-dev
  <ul>
  <li>Added Subreddit</li></ul>
</details>

## Usage
### Random Wikihow
```javascript
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()

(async() => {
const wikihow = await api.wikihow()
 console.log(wikihow)
}()
```
### Coinflip
```js
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()
(async() => {
const coinflip = await api.coin()
console.log(coinflip)
}()
```
### Random Users
```js
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()
(async() => {
const users = await api.user()
console.log(users)
}()
```
## Usage For Discord.js
  
### Random Wikihow
```js
const { MessageEmbed } = require("discord.js")
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()

const wikihow = await api.wikihow()
const embed = new MessageEmbed()
.setTitle(wikihow.title)
.setImage(wikihow.url)
msg.channel.send(embed)
```
### Coinflip
```js
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()
const coinflip = await api.coin()
msg.channel.send(`${coinflip.coin_image}`)
//coinflip.coin_image => get coin image
//coinflip.coin => Tail/Head
```
### Random Users
```js
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()
const users = await api.user()
msg.channel.send(`${users.name}`)
//api.surname => Get Surname
//api.addres => Get Address
//api.phone => Get Phone Number
//api.email => Get Email
//api.city => Get City
```
### Memes
```js
const KagApi = require("@kagchi/kag-api")
const api = new KagApi()
const meme = await api.memes()
msg.channel.send(`http://imgur.com/${meme.hash}.jpg`)
//api.dankmemes()
//api.indonesia()
//api.coronamemes()
```
### List Api:
1. random wikihow
2. coinflip
3. Random Users
4. Random Memes
5. Subreddit
