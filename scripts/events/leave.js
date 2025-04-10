const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
config: {
name: "Out",
aliases: ["l"],
version: "1.0",
author: "Sandy",
countDown: 5,
role: 2,
shortDescription: "bot will leave gc",
longDescription: "",
category: "admin",
guide: {
vi: "{pn} [tid,blank]",
en: "{pn} [tid,blank]"
}
},

onStart: async function ({ api,event,args, message }) {
var id;
if (!args.join(" ")) {
id = event.threadID;
} else {
id = parseInt(args.join(" "));
}
return api.sendMessage('𝙺𝙰𝙺𝙰𝚂𝙷𝙸 𝙱𝙾𝚃 𝗟𝗘𝗔𝗩𝗘:\n》𝑺𝒊𝒍𝒆𝒏𝒕𝒍𝒚 𝒋𝒐𝒊𝒏 𝒌𝒐𝒓𝒔𝒊𝒍𝒂𝒎 𝑳𝒐𝒖𝒅𝒍𝒚 𝒍𝒆𝒂𝒗𝒆 𝒌𝒐𝒓𝒕𝒆𝒔𝒊.\n\n➤ - 𝑻𝒂𝒌𝒆 𝒄𝒂𝒓𝒆, 𝒐𝒓 𝒅𝒐𝒏’𝒕', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}
}
