const fs = require("fs");
module.exports.config = {
	name: "jiya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "jiya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ishu")==0 || event.body.indexOf("Ishika")==0 || event.body.indexOf("@Ishika Choudhary")==0 || event.body.indexOf("Behna")==0) {
		var msg = {
				body: "Meri malkin Ishika...Arun Ki pyari Behna",
				attachment: fs.createReadStream(__dirname + `/cache/ishika.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💝", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }