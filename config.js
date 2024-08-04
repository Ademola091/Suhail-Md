const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "African/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Bot Made By Ademola❤️🔐" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_53_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA1NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQxLFxuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICA3MixcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDY5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICA4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdIbHQvWGVQM3R3aG5xVUFUeWxNNFJhcmpMWXlQT1J1OTYzL2U2VzlPYmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNOaGxfNzdMVDdPcmNhYXhzMmtvbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzdlOWViMDItZTgyNC00MjBjLTk2NDEtYmIwYWM0MjUxZWRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNyxcbiAgICAgIDE5OSxcbiAgICAgIDU3LFxuICAgICAgMjgsXG4gICAgICAxODUsXG4gICAgICAxNSxcbiAgICAgIDEzOCxcbiAgICAgIDE5NyxcbiAgICAgIDEwNCxcbiAgICAgIDg1LFxuICAgICAgMjUsXG4gICAgICAxMyxcbiAgICAgIDE2MyxcbiAgICAgIDIxNyxcbiAgICAgIDExMixcbiAgICAgIDM3LFxuICAgICAgNzcsXG4gICAgICA1OCxcbiAgICAgIDE2NixcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICA2OCxcbiAgICAgIDE1NSxcbiAgICAgIDEzNixcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgNjMsXG4gICAgICAxMjgsXG4gICAgICAyNDksXG4gICAgICAxODksXG4gICAgICAxNzQsXG4gICAgICA2NyxcbiAgICAgIDMzLFxuICAgICAgMTg2LFxuICAgICAgMTE0LFxuICAgICAgOTUsXG4gICAgICA4OCxcbiAgICAgIDE5NSxcbiAgICAgIDEwNyxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1SQ0pBTVRTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTU5ODk2NDAyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTAzMTA2MjIxMjYzNjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l5NDN2QUNFTzdIdnJVR0dDY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieElldjN1ZHQ1d01yZ2I5ZG53VlphTnNGS1V6T0FTc0xyUldTN25OUThsUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYL0FWOC9Sc1BhbjVkVWI0RTJRYjF5ZkJ3R1d6VnI4ZVVRZG04Q0htTm1MbE1RNlV6S0lIL21EeGxVU1N3R3FXZHF0THhZdlBVNDMwUDhOY0RwMFRoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvelJKVHlFby9TZ3F3QVBrdlR2ejVlNEp6bzV3RFc2bjdtdkJVRjMyNnF4R2hPNnYwVXV2bERzKy9XTk14M2pBOGFyd2R6T1cxaTRSKzZzMlhsa3FqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU5ODk2NDAyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc4NjgwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTMyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQW82MzVYWE1oNU1qS3h3QlljbDNlbDJGd0hvL3R4QUdXTVR6bDNLbkJQVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzMyOTkyMTIsXCJjdXJyZW50SW5kZXhcIjoxNSxcImRldmljZUluZGV4ZXNcIjpbNiwxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTAwMTM4NTA0NFwifSIKfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Bot Made By Ademola❤️🔐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ademola❤️🔐",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "ADEMOLA❤️🔐",
  ownername:process.env.OWNER_NAME|| "Ademola💝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
