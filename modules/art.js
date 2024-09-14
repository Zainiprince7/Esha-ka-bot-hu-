const axios = require("axios");
module.exports.config = {
    name: "art",
    version: "1.0.0",
    hasPermssion: 0,
    credits: 'Dũngkon',
    description: "",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 0,
'image-downloader': '',
        'tslib': '',
        'imgur': '',
        'request': '',
        'axios': ''

    }
const {ImgurClient} = require('imgur');
const {image} = require('image-downloader');
const {createReadStream, unlinkSync} = require('fs-extra');
const {get} = require('request');
module.exports.run = async function ({ api, event, args, Users, Currencies, Threads }) {
  try {
      let axiso = require("axios")
let fs = require("fs-extra")
    let path = __dirname + "/cache/meitu.png"
let pathVideo = __dirname + "/cache/meitu.mp4"
let link = await global.nodemodule["tinyurl"].shorten( event.messageReply.attachments[0].url || args.join(" "));
    if (!args[0]) {
        api.sendMessage("𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝗼̛̣𝗶 𝗺𝗼̣̂𝘁 𝘁𝘆́ 𝘀𝗲̃ 𝗰𝗼́ 𝗹𝗶𝗲̂̀𝗻", event.threadID)
let dungkon = await axios.get(`https://stingray-app-chpom.ondigitalocean.app/meitu-image-v2?url=${link}`)
  await global.utils.downloadFile(dungkon.data.image, path)
      var cc = `🖥️==『 𝗖𝗢𝗩𝗘𝗥𝗔𝗡𝗜𝗠𝗘 𝗡𝗘𝗧 』==🖥️
 
🔰 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${dungkon.data.message}
⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗹𝗼𝗮𝗱: ${dungkon.data.timeProcess}
😻 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵: ${dungkon.data.image}\n👉 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 !𝗰𝗼𝘃𝗲𝗿𝗮𝗻𝗶𝗺𝗲 + 𝘃𝗶𝗱𝗲𝗼/𝗿𝗲𝗽𝗹𝘆 𝘃𝗶𝗱𝗲𝗼 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 đ𝗼̂̉𝗶 𝘃𝗮̀ 𝗲𝗱𝗶𝘁`
   api.sendMessage({body: cc, attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
  }
 if (args[0] == "video") {
    api.sendMessage("𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗱𝗼̛̣𝗶 𝗺𝗼̣̂𝘁 𝘁𝘆́ 𝘀𝗲̃ 𝗰𝗼́ 𝗹𝗶𝗲̂̀𝗻", event.threadID)
let res = await axios.get(`https://stingray-app-chpom.ondigitalocean.app/meitu-image-v2?url=${link}`)
let cc = await axios.get(`https://stingray-app-chpom.ondigitalocean.app/meitu-video?type=7&url_1=${link}&url_2=${res.data.image}`)
await global.utils.downloadFile(cc.data.video, pathVideo)
   var dungkon = `📸==『 𝗖𝗢𝗩𝗘𝗥𝗔𝗡𝗜𝗠𝗘 𝗘𝗗𝗜𝗧 』==📸
 
🔰 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: ${cc.data.message}
😻 𝗟𝗶𝗻𝗸 𝘀𝗮𝘂 𝗸𝗵𝗶 𝗰𝗵𝘂𝘆𝗲̂̉𝗻: ${cc.data.video}
━━━━━━━━━━━━━━━━━━━━━━
👉 𝗖𝗼𝘃𝗲𝗿𝗮𝗻𝗶𝗺𝗲 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼 𝗯𝗮̣𝗻 𝗱𝗮̣𝗻𝗴 𝗲𝗱𝗶𝘁 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 đ𝗼̂̉𝗶`
api.sendMessage({body: dungkon, attachment: fs.createReadStream(pathVideo)}, event.threadID, event.messageID)
    } 
  } catch(e) {
    console.log(e)
      api.sendMessage("𝗗𝗮̃ 𝘅𝗮̉𝘆 𝗿𝗮 𝗹𝗼̂̃𝗶, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶 𝘃𝗮̀𝗼 𝗹𝗮̂̀𝗻 𝘀𝗮𝘂", event.threadID)
  }
  }accept 