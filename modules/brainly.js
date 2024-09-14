const axios = require("axios");

module.exports.config = {
  name: "brainly",
  version: "1",
  hasPermssion: 0,
  credits: "ryuko",//modified by ntrems
  description: "brainly.",
  usePrefix: false,
  commandCategory: "Search",
  usages: "brainly <ask>",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {

          let { threadID, messageID } = event;
          const question = event.body.slice(8).trim();

          if (!question) {
            api.sendMessage("🧑🏻‍🏫𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚢𝚙𝚎 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎...", threadID, messageID);
            return;
          }

          try {
            api.sendMessage("🖇𝚂𝚎𝚊𝚛𝚌𝚑𝚒𝚗𝚐 𝚏𝚘𝚛 𝚊𝚗 𝚊𝚗𝚜𝚠𝚎𝚛...", threadID, messageID);
            const res = await axios.get(`https://testapi.heckerman06.repl.co/api/other/brainly?text=${encodeURIComponent(question)}`);
            const data = res.data;

            if (data.question && data.answer) {
              const response = `🤖𝐍𝐭𝐫𝐄𝐦𝐬 (𝐁𝐫𝐚𝐢𝐧𝐥𝐲):\n\nQuestion : ${data.question}\nAnswer : ${data.answer}`;
              api.sendMessage(response, threadID, messageID);
            } else {
              api.sendMessage("no answer found for the given question.", threadID, messageID);
            }
          } catch (error) {
            console.error(error);
            api.sendMessage("error occurred while fetching data from the brainly API.", threadID, messageID);
  }
};