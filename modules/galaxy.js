const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logo",
  version: "1.0",
  hasPermssion: 0,
  credits: `Mirrykal`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n1 : Glowing", "\n2 : chromelogo", "\n3 : black metal", "\n4 : bluetext","\n5 : bluemetal","\n6 : hot logo",
      "\n7 : carbon", "\n8 : yellow", "\n9 : golden", "\n10 : blue jewerly", "\n11 : cyan jewerly", "\n12 : green",
      "\n13 : orange jewerly", "\n14 : purple jewerly", "\n15 : red jewerly", "\n\nmore logo for : logov2"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: logo list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/1?text=${name}`;
      message = "『𝙂𝙇𝙊𝙒𝙄𝙉𝙂』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/2?text=${name}`;
      message = "『𝘾𝙝𝙧𝙤𝙢𝙚 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/3?text=${name}`;
      message = "『𝘽𝙡𝙖𝙘𝙠 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫";
      break;
    case "4":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/4?text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙏𝙚𝙭𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "5":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/5?text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "6":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/6?text=${name}`;
      message = "『𝙃𝙤𝙩 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "7":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/7?text=${name}`;
      message = "『𝘾𝙖𝙧𝙗𝙤𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽: ➫ ";
      break;
    case "8":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/8?text=${name}`;
      message = "『𝙔𝙚𝙡𝙡𝙤𝙬』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "9":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/9?text=${name}`;
      message = "『𝙂𝙤𝙡𝙙𝙚𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "10":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/10?text=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "11":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/11?text=${name}`;
      message = "『𝘾𝙮𝙖𝙣 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "12":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/12?text=${name}`;
      message = "『𝙂𝙧𝙚𝙚𝙣 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "13":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/13?text=${name}`;
      message = "『𝙊𝙧𝙖𝙣𝙜𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "14":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/14?text=${name}`;
      message = "『𝙋𝙪𝙧𝙥𝙡𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    case "15":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/15?text=${name}`;
      message = "『𝙍𝙚𝙙 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💚🪽 ➫ ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: +𝙡𝙤𝙜o 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
  }


  api.sendMessage("𝘽𝙖𝙗𝙮 𝙏𝙝𝙤𝙧𝙖 𝙒𝙖𝙞𝙩 𝙆𝙖𝙧𝙤 𝑳𝒐𝒈𝒐 𝘽𝙖𝙣 𝙍𝙖𝙝𝙖 𝙃𝙖 𝘼𝙥𝙠𝙖🩵🪽 ➫ ", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};