const fs = require("fs");
module.exports.config = {
	name: "mm",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "Don't Change Credits",
	commandCategory: "no prefix",
	usages: "😥😥😥",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mood")==0 || event.body.indexOf("Sad")==0 || event.body.indexOf("😥")==0 || event.body.indexOf("sad")==0) {
		var msg = {
				body: "💔😌😌👈🏻",
				attachment: fs.createReadStream(__dirname + `/noprefix/sad/A1.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }