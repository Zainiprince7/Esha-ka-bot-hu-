const axios = require('axios');

module.exports.config = {
    name: "vimgur",
    usePrefix: false,
    version: "1.0",
    credits: "Rishad",
    cooldowns: 5,
    hasPermission: 0,
    description: "Upload image or video to Imgur by replying to photo or video",
    commandCategory: "tools",
    usages: "imgurl [image, video]"
  },

  module.exports.run = async function ({ api, event }) {
    const link = event.messageReply?.attachments[0]?.url;
    if (!link) {
      return api.sendMessage('Please reply to an image or video.', event.threadID, event.messageID);
    }

    try {
      const res = await axios.get(`https://rishadapi.rishad100.repl.co/imgur2?apikey=fuck&link=${encodeURIComponent(link)}`);
      const uploaded = res.data.uploaded;

      if (uploaded.status === "success") {
        return api.sendMessage(uploaded.url, event.threadID, event.messageID);
      } else {
        return api.sendMessage('Failed to upload image or video to Imgur.', event.threadID, event.messageID);
      }
    } catch (error) {
      console.error(error);
      return api.sendMessage('Failed to upload image or video to Imgur.', event.threadID, event.messageID);
    }
};