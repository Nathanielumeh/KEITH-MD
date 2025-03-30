/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU23KqSBT9l37FHK6KWpWqQVRAAUUhilPnoYUGWq6hGxVT/vsUuVTyMCeTeevqy+q111p7v4CixAQtUQvGL6Cq8RlS1C1pWyEwBpMmilANeiCEFIIxaO2bPc3RdOAkJ6WCu2ukLJS2Oo1m7cY46Buyj7XFWreIxz2Cew9UzTHDwTeAVUD882AzUa/uydwnE1bLmVZlc3lw6XuOMuEPa1KKaJe06SO4d4gQ17iIZ1WCclTDbInaNcT1z+j7kyg1vOeEF5JavkSpy+6zQ53w0bnsw0mrT6YqcW3tFGvkZ/T9Iw/bwL+V8zOz2AoS5JxjzpAtpxWWra0PtXic6QtLHj3Fb/QJjgsUGiEqKKbtj3W3lomy1fLdvDUa/1id5ka69cg0Tg/0IOajFZIjReHFp6Pu/Yx43a+3h0Ugzo1Dua2dpSG5RNCzcmnUcMRsLYeT2ZW7oklx+Up8XX9kJf0/ujvKPDMnmpkFEtt6gk+HumVk7VDeWZsp43jrKFudQkn0Z/7P6DdPT1dOCSZDcpPXMudZAlK5EzNlvakUBPPMjZoN4ryFOHc+6UPa1N+x5OrwPNXLJSOZSDvKumTIu+vumrCzSzxbpompuWmrXzJcM4akriyXytDZmD47cmDMqOtZgi/PXGqn9nB+GvVjg3vOYuXxtaIUtUYIxvy9B2oUY0JrSHFZdHt9vgdgeN6ioEb0VV1wGTL7aOV7Uj7FKrGmTkgN1+Kb28oWmQsN4L5vnM2bECT+I+iBqi4DRAgKdUxoWbcWIgTGiIDx3797oEBX+uZb95vI90CEa0K9oqmyEoYfpn4cwiAom4Ju2yJQuwWqwZj73EaU4iImnYxNAesgwWekJpASMI5gRtC9B0J0xgHq8AB/5pWmFc+u3VBMHnZP5FKETkc5KYu3KxEvH4MBEh4CQY4eJIkXH6CMjg9HFAgwDCVhIA9AD+D3lune/NFBNlosp5szjyf9KJSzDffMBjfImLqXvrrwJj2qUQjGtG5QDxxhkDaVW6ao+Ab3WRfceGiy1gLnK3NbaOSJMdaJz1TeF9w3S8H45XNMqWXY4a234px39l3h+WsCcVe5IEpDXhxJHC8Lo7Eg/0V+XTolYVX9KhDtgN9V756EiEKcETAGqmEGjBlMZ7YaVsehpilcrKixAj5d+kj7W5yGWXlrJnO6cYdc7nFrP1H7eOsq+7my2apTj+OODD/YsJwgPf4LCBgDelwuB8RXzb7L5OVo74sjOr/qnMeexUqOiHmVW6uUh7uVeNDlIbcd6plET5d4mZ1R4Se8s9G4VbDeP19CzpTaUE25adcaH2n5+lkyxIHM1nGyNd3L1Vyy/RSRm8/AQkenKDDa03IdaPZVW3vnKn0+QMwtjMho1xONj2C95+Ics0Yi6LunkcPYPLJVLb689eHrHMje5y9+bZGX92xFGL2OswJ2Hv2nO19zzt17X0DeJ+QfsjSJFtCS483R81h7kdlTwXAaP00v86sz8+KYt22NpSiNRnYD7vffPVBlkEZlnYMxgEVYlzgEPZBBQpXPVnVxjgiFeQXGvCyJoiSKQv/+D2b2pULfBwAA';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "234";
const author = process.env.OWNER_NAME || 'Nathaniel';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '2348139401729';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'NATHANIEL-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel /0029Vaw1SrF96H4QliRM0a3n';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'true';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later he is busy now';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'true';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
