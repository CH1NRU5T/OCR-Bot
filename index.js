const Discord = require('discord.js')
const tesseract = require("node-tesseract-ocr")
const client =new Discord.Client();
const prefix='!';
const tes = require('tesseract.js')
client.once('ready',()=>{
  console.log('OCR-Bot is online')
});

client.on('message',msg=>{
  if(!msg.content.startsWith(prefix)||msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ocr'){
    console.log(args[0])
    const link=args[0]
    performOcr(msg,link)
  }
})

function performOcr(msg,link){
//   const config = {
//   lang: "eng",
// }

// tesseract
//   .recognize(link, config)
//   .then((text) => {
//     console.log("Result:", text)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })
// }


 tes.recognize(link, 'eng'
).then(({ data: { text } }) => {
  console.log(text);
  msg.reply(text);
})
}

client.login(process.env.TOKEN)