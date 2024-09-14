module.exports.config = {
  name: "joke",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ZuesXxX",
  description: "Projec M4a.",
  commandCategory: "Hình Ảnh",
  usages: "ownfiles",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/PxZnzqKB/images-2.jpg",
"https://i.postimg.cc/D0scfSny/images-3.jpg",
"https://i.postimg.cc/8k22RYKx/images-4.jpg",
"https://i.postimg.cc/BvXnkyT4/images-5.jpg",
"https://i.postimg.cc/sxNkQV6N/images-6.jpg",
"https://i.postimg.cc/0NffQVr6/images-7.jpg",
"https://i.postimg.cc/R0dwLq7q/images-8.jpg",
"https://i.postimg.cc/Njc48K9v/images-9.jpg",
"https://i.postimg.cc/4yT3mRyZ/images-10.jpg",
"https://i.postimg.cc/qBL9SdrK/images-11.jpg",
"https://i.postimg.cc/D0YVNRDL/images-12.jpg",
"https://i.postimg.cc/L4WtV26D/images-13.jpg",
"https://i.postimg.cc/T2ycWpqQ/images-14.jpg",
"https://i.postimg.cc/mgFYtqYD/images-15.jpg",
"https://i.postimg.cc/qMm0PjgM/images-16.jpg",
"https://i.postimg.cc/NjW9Rg6X/images-26.jpg",
"https://i.postimg.cc/zGsfQ0PH/images.png",
"https://i.postimg.cc/L6vCvW5v/images-17.jpg",
"https://i.postimg.cc/QNnV5QZP/images-27.jpg",
"https://i.postimg.cc/RFRK9jjD/images-18.jpg",
"https://i.postimg.cc/TwFLRftQ/images-19.jpg",
"https://i.postimg.cc/Bn48ZhCW/images-20.jpg",
"https://i.postimg.cc/2y3tWRN1/images-28.jpg",
"https://i.postimg.cc/Y0DX24JZ/images-21.jpg",
"https://i.postimg.cc/nh4v0j3x/images-22.jpg",
"https://i.postimg.cc/260pvSsF/images-23.jpg",
"https://i.postimg.cc/pLW6QHBs/images-24.jpg",
"https://i.postimg.cc/bv2WrRgP/images-25.jpg"
  "https://i.imgur.com/uIR777T.jpg",
];
	 var callback = () => api.sendMessage({body:`••••︵🦋シ     ︵☘️シ Funny Picture 🖼️ : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };