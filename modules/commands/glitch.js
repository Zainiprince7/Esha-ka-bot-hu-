const API = "https://api.zahwazein.xyz/ephoto/arrow2?api=zenzkey_a1780450fcc8&text="
module.exports.config = {
	name: "arrow2",
	version: "30.0.10",
	hasPermssion: 0,
	credits: "Dark Rulex Team",
	description: "Text Maker",
	commandCategory: "Ephoto",
	usages: "(text)",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    anup = args.join(" ");
    (event.type == "message_reply") ? anup = event.messageReply.attachments[0].url: anup = args.join(" ");
    const pathsave = __dirname + `/data/aliya.png`;
    let imageBuffer;
    api.sendMessage("PLEASE WAIT SOME SECONDS", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(anup)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `Your's Logo Made By < Arun >`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};