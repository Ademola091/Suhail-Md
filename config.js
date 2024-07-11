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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_58_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidGxtOEZKZStDZlR1eVpSWXVYQVE0QzZZT1VBcWpNeERNVHNYNC9uMFZDTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEVCQTdvLTBSY2E2cVE2ZUtadEpNZ1wiLFxuICBcInBob25lSWRcIjogXCJmNWM5ZjUwMy0wYzY3LTQ3YWUtODhlYy01NzZmMGUzMzgyMWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQzLFxuICAgICAgMzksXG4gICAgICAxODEsXG4gICAgICAxNzcsXG4gICAgICAyNDUsXG4gICAgICAxNDIsXG4gICAgICAxMjAsXG4gICAgICA2NyxcbiAgICAgIDI0MyxcbiAgICAgIDEwOSxcbiAgICAgIDE5MyxcbiAgICAgIDExMCxcbiAgICAgIDEzMyxcbiAgICAgIDE5MyxcbiAgICAgIDUzLFxuICAgICAgOTMsXG4gICAgICAyMjcsXG4gICAgICAyMTksXG4gICAgICAxOTQsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTg0LFxuICAgICAgMjUyLFxuICAgICAgMjE2LFxuICAgICAgMjQ2LFxuICAgICAgNzksXG4gICAgICAyMixcbiAgICAgIDM3LFxuICAgICAgMTk0LFxuICAgICAgMjE2LFxuICAgICAgMjIzLFxuICAgICAgMTMzLFxuICAgICAgMjE1LFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICAxNTAsXG4gICAgICAyMjQsXG4gICAgICA5LFxuICAgICAgMTQyLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0U3UEpFSlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTk4OTY0MDI6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0OTAzMTA2MjIxMjYzNjo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeTQzdkFDRUsyQ3dMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInhJZXYzdWR0NXdNcmdiOWRud1ZaYU5zRktVek9BU3NMclJXUzduTlE4bFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUjJoNkwrOC9pNVAxMTR2N0crdjMxZFVDT2U4RTJ2ODV0VFhGSEpmZjNsMmRTOXFHdmVwMG1qTVNKMnB6MjA5SDBJSVVYOTZWUzhVOTRMZnArcU1KaFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMm9WVU8zdG1qTjd3V0V4TDU1K05VeDFxRmRLZzRJY2NNTUU5MXRUN0xsZnNiQUd0SGFOY1RKd3ZmYU1uczNoalp5dnV1WkJKNXlkU3pmZDZYNGhjZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1OTg5NjQwMjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzEzNTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTTNQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNM1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTd0hLaEZXalhraTBJWnpneVp2R3M5WldyRjlWMTZ1aHR5d21YWFFlV2c4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3MzI5OTIxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNjgxODUxOTE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Ademola",
  packname: process.env.PACK_NAME || "Ademola",
  botname : process.env.BOT_NAME  || "Hardeaymorlar-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ademola",


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
