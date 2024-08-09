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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/5dc19c829ebb2ae0ecb6e.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Bot Made By Ademola❤️🔐" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349159896402";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_37_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYYkt6UG1BMGZaL21rYmpGY1pVNjl2RkJhTXpWQXR0bmxCUjQ1ekR3V2hzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJra04xbFBxVVM0aTU1a3FMUUE0M2p3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM2YjliZjE3LTk0NWItNDdjYy05YTg1LTliZjRhMjI5Njk3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTEsXG4gICAgICAxMTYsXG4gICAgICA3MCxcbiAgICAgIDEwOSxcbiAgICAgIDE1MyxcbiAgICAgIDIxNixcbiAgICAgIDk1LFxuICAgICAgMTk0LFxuICAgICAgMTQxLFxuICAgICAgMTEyLFxuICAgICAgMjA0LFxuICAgICAgMjQxLFxuICAgICAgMTM4LFxuICAgICAgMTQyLFxuICAgICAgMTEzLFxuICAgICAgNzMsXG4gICAgICAxMjQsXG4gICAgICAyMDAsXG4gICAgICAxMSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDk1LFxuICAgICAgMTUxLFxuICAgICAgMTEyLFxuICAgICAgNjIsXG4gICAgICA0NixcbiAgICAgIDE1NCxcbiAgICAgIDEwNCxcbiAgICAgIDIzNixcbiAgICAgIDExMCxcbiAgICAgIDEzNixcbiAgICAgIDE5MixcbiAgICAgIDEyLFxuICAgICAgMjQxLFxuICAgICAgNzksXG4gICAgICAxNDQsXG4gICAgICAyMTIsXG4gICAgICAyMCxcbiAgICAgIDQ1LFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0tIOU5RWFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjYyODI1MTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5vYmxlIFByaW5jZVwiLFxuICAgIFwibGlkXCI6IFwiMTAzNDkxOTg0OTkwMzUxOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9peC9jRkVLblQyTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOM3pybDluRjMzaDZqTDg0MnEzZncrNXNlNHVCSm1SVmd6ZGo4SXIrWmpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9INkhZMG1EeXhjRkdRU3VGUUpwaWlKbjUzWDlZUFplc2JkblVOSWFMaGExMXRtVVdvcnhWWndsT3l1bjJmVTVpN05vU2o1RHVsWmtWTkd1ZFkvVERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBxZFZxdTI0UGtreEZYOW5hRkcxakc0TnY2RnJoYjZOdFhUeVo1TlJsakVOYXpSNmxuUlZ6Y1RhaTJOa2Fhb05EcHEwWXdDKzQxeXdQNFpQQ21PaUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjYyODI1MTE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjE0MjU3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Bot Made By Ademola❤️🔐" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ademola❤️🔐",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "Hardeaymorlar❤️🔐",
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
