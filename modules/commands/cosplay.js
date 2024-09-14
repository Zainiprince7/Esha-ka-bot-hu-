module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT/NTH Re-made by SaikiDesu ",
	description: "Random Cosplay Photos",
	commandCategory: "random-img",
	usages: "cosplay",
	cooldowns: 3
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	
      if(money < 15000) api.sendMessage("You need 15000 dollars to see the photo!",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 15000})

		axios.get('https://api.j-jrt-official.repl.co/cosplay.php').then(res => {
      console.log(res)
		var callback = function () {
					api.sendMessage({ 
            body: `Random Cosplay Photos\n💸Costs: 15000$`,
						attachment: fs.createReadStream(__dirname + '/cache/cosplay.jpg')
       },event.threadID, () => fs.unlinkSync(__dirname + '/cache/cosplay.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cosplay.jpg`)).on("close", callback);
			})
      .catch(err => {
                     api.sendMessage("Failed to generate image", event.threadID, event.messageID);
    api.setMessageReaction("☹️", event.messageID, (err) => {}, true);
                  })     
}
                }

