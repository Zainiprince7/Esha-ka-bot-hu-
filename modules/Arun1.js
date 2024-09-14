 const fs = require("fs");
module.exports.config = {
	name: "Arun",
		version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
		cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
		 react.includes("Arun") || 
react.includes("arun")) {
		var msg = {
				body: "★꧁💗𝕄𝕐 ℍ𝔸ℕ𝔻𝕊𝕆𝕄𝔼 𝕆𝕎ℕ𝔼ℝ🥰꧂                    𝗠𝗮𝗱𝗲 𝗕𝘆🫶★\n\n✦꧁𝐙𝐚𝐢𝐧𝐢-𝐉𝐮𝐭𝐭꧂✦\n\n★★᭄𝐳𝐚𝐢𝐧 𝐤𝐚 𝐛𝐨𝐭 𝐡𝐮 𝐦𝐚𝐬𝐨𝐨𝐦 𝐬𝐚 🥺:\n\n✦ 𝘄𝗮𝘀𝗲 𝗼𝘄𝗻𝗲𝗿 𝗴 𝘃𝗶𝗱𝗲𝗼 𝗯𝗿𝗶 𝗹𝗴𝗮𝗲𝘆🙈🔥  ✦ \n𝗡𝗢𝗧𝗘 \n 𝙱𝙾𝚃 𝙼𝙰 𝙺𝙸𝚂𝙸 𝙱𝙷𝙸 𝙺𝙸𝚂𝙼 𝙺𝙰 𝙸𝚂𝚂𝚄𝙴 𝚈𝙰 𝙰𝙿𝙽𝙴 𝙽𝙰𝙼𝙴 𝙺𝙰 𝙱𝙾𝚃 𝙱𝙽𝚆𝙰𝙽𝙴 𝙺 𝙻𝚈 𝙽𝙴𝙲𝙷𝚈 𝙳𝚈𝙴 𝙶𝚈𝙴 𝙻𝙸𝙽𝙺 𝙿𝙰 𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙺𝚁𝚈👇👇  😋https://www.facebook.com/sardarjutt.jutt.92?mibextid=kFxxJD`",
				attachment: fs.createReadStream(__dirname + `/noprefix/zainc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

		}