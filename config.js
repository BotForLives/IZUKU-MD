const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/_madeby_ave' // add your username
global.sudo = process.env.SUDO || '27767494368'
global.devs = '27767494368';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  
  sessionName:  process.env.SESSION_ID ||  "IZUKU;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09WY3haQW51RmoyN1ZiaW5adEVidkRSQWlhWDFWUnBvZzMrOVp5UDlXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUk5IdWtKZWoyam4yL2ZURldRN0ZTR1JaVmU3NVYvNDFhY2E3N1k2cGdTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUG5JVW1TZTVKaHpJWTBHMG5ibnZHNjVSSm9pTnNhcDdIU0RHVFU4NmtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZG03MXZ4RytMU0xkMUx0VFk5OGZvcmY2NUNyVFp5MG10NnFDQUNpdDJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBOEcvRGFzZ3BhdHBIcU12NXN4ei9NVzQxWDJWakkyZ0ZhaTBxZ0M0bjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldaSnlYODBnWHNFYWNCM0NKYjdrbFBRMTBhZVZYMTFXWHJrRDVFajNaWG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9aMUFyS3R0N3N6dUJKa0dwWStNbG93ZWZUK2dOd0lPZEY0TEZVb0psND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWgwR0VkM0NlRHdzeFkvNGVBSlpuMzlzL2FFb094blV2V3p4QTBhMHcyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFwRHBYa1ZmMlRQM09uVGhLczNpNkFVU1VaQllYQTdwSDc2dmRtMENCWFhsdkIzd0JMbFB3ZDFFcjE2YlNiMm1EM0xjVGRnVzFUVENUS2ZaTTdYOWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJQeFVlcGNzdnFsVE9GTmd4QWx3a2tRem9vaDVHMXRWSVRLWEFhUC9uZDZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFERUEwQkUwN0ZGMDI1RTBGNDk1RDkwM0Q0Q0JCMUNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTU5NzIwODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYyMzlDQ0VGQzYxQjJFMTc4REE4RkQ2OEUxRTMyOEY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTU5NzIwODh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhxOWRWdDRHVDJHbkM0QklWNzZGd0EiLCJwaG9uZUlkIjoiNWFkZmFjYTctY2Q4YS00ZGRjLTk1NzUtY2U0ODcxMDdiMzJmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhPWWYzNlB3NmFhSlBRWmc0dTVmUEhTbzZFaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYS3A0ZnhlSFZPRzlPT21UUGt5YWw5c2JxZGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNExKNDlBWU4iLCJtZSI6eyJpZCI6IjI3NjY1NTcyODg2OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkF2ZSBCb3QiLCJsaWQiOiI4NTgxODE0NDMxODIyOjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0tkMUljSEVPblBucklHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMnFjMG9abnVkSnB4ZjZUS0Y2MDlPcXlyR3J3NGN3ejJUUURTWUJzeUxnaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZlJibjZPSUZxUFVZbHRUaEI1YmNtalZtYklrVXUvd1dVV2lBTXhsakl3Wkl0TlAwcTcyRkVxWSsvUGVzNWtiRHdpSkJreG9iZ0Q5SzI3emhDdGxpQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkpUYTAyRDFFN0tWRGFKeFFlRXRlRU1kUkkzblpMTlYyajJIQjYwQ1k2dm90dUJJcDVaYThlMUtSKzVCK25TU2ovR1crZ3prdTFrMHRVUGNGRnFIM2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NjU1NzI4ODY6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHFuTktHWjduU2FjWCtreWhldFBUcXNxeHE4T0hNTTlrMEEwbUFiTWk0SiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTk3MjA4NiwibGFzdFByb3BIYXNoIjoiMXprcVJDIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMT2oifQ==",
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU BOT' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ÆVE' : process.env.OWNER_NAME,
  author:  process.env.PACK_INFO === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  typingprensence:  process.env.TYPING === undefined ? false : process.env.TYPING,
recordingpresence:  process.env.RECORDING === undefined ? false : process.env.RECORDING,	
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
