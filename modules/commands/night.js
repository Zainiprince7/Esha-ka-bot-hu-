const fs = require("fs");
module.exports.config = {
	name: "night",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "night",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Misha")==0 || event.body.indexOf("Mish")==0 || event.body.indexOf("@Misha Gupta")==0 || event.body.indexOf("misha")==0) {
		var msg = {
				body: "💝💝 ITS MISHA ....BOT MADE BY ARUN KUMAR ",
				attachment: fs.createReadStream(__dirname + `/cache/misha.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }