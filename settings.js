/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VVWY6rRhTdS/3aHYOBNlhqKWAMxth4HiDKR0EVgxkbislPXkP2kB1kbdlAhN2tbunlvXT4KhVV55577rm3voEkDQqs4xaMv4EsDypIcLckbYbBGEil6+Ic9AGCBIIxOEkzTfJbi2sWqq1yzm6uSfLZOqbPBzdf27JccD12ONL9iH0Btz7ISjsKnJ8ACnU6C+3nBZ/CRhEXpEI8TKWLPEfpWbvEJwv28sUZ7hZ+/QJuHSIM8iDxppmPY5zDSMftGgb51+h74monOeg1aNzYU+OJmJ0brz1dzmFz1AalVB4CzlsZonMyv0bfQSznW/5UVWJTe2307HLJ2IMiCpyNULmyY3o+cqjSEk/ag34ReAlGGsIJCUj7Zd111ZIG2/MiVS4rLLRDYlK9hZ4c/IwUW7bu7VsNuumrEg4PXyM+5VTiuUdvWgY1n8xHZikML2e15oq6xdsJRzNUTwt8vt14n4mv83evhP9H91A8K3ZUak1rkmHtK1rq10qY7eFcpr3F2S4pW2rETTOjw6/RLxh9uw72++tMmAwuiMVUu1aqWNLtdKhwtacbZnKMXqmN8kl3SMr8ZyzTUL7Y/mG3mXB4GjvXESEys6hmLcXOxNWRUWYzbmm2l9e6sF3MORdnV9emWhxll46UOZs5cL2s1TyvdX2jFDOHYytJfLlnFOJWQ2BM3/ogx15QkBySIE3uewzXBxBVO+zkmNzlBdFJT0YmyqWIt0p+RB2vTBQZz0auV5XfzFHlhLXROkoxMl9AH2R56uCiwGgWFCTN2yUuCujhAox/u1eqSzrHcUrwPEBgDIYMy9OMwFL0aCj8WvxS+5AUMMt+STABfeDmabzEYEzyEvfB/QYncQrLSaJATQWZnYq0pMhDQRaGFM8/KzzX5Rg/ou6DGBcExhkY0yOW4Xiepejb732Q4IY8DNSlzdB94AZ5QQ5JmUUpRO/uev8JHSctE7JrE2fSLXAOxp+2MSFB4hVdamUCc8cPKjzp8gBjF0YFvvUBwlXg4A4PWNVlZVlNvKVguVbV0rriV6nupPPT5HHEsW2X5W3+iWcQfmIFjn2CAoJPtgN5x6Y4asRA0Mnx6N3uzg+tJEH1dTVLMHMtKgVp+wjOl/X+xPK8c7fDwwM4x+hdZRs6YZnt0xAnP8FFlnQtwnbdsNlpE+m9KsdmnUj6sD58wn14C4y/fczLSYo6PG5h7MyzIICuWl2c7+0wZqjvHZHA7jgwIPFhEuDo77/+/KOL91aMDglhAoOoAGMw0RZOb+HI0/nKJAteVSXNEyeeCD6K996ND7fzUXotJYVs9zwVH6i16U+4YLcXz4q43U3kA0XZPfp5O6CG7Mu/gIAx2B4zpi7WMa2Y1fMokPFSdu3oNKdh1tTGifPnAcLXnoXOdpUOHJlhmWo9EJcZ0m1luV4oGD3PRvYJHhYrI4paS5H38uali/Yw0edgZ0GQtjVVjkg1xxcvaqUF3uWkPGhrR9AMUfSSMMZybVhqszlNdpbotUUIlzlKPRdpSrTSqx3HcUTWhng9593SFSTvMSfucyp6ex+Ctw5+WM4N8H3cvtXiv4v2YX/q1v8E8jbBf2Rddw6XI29rHw4DYx4Z8lDblGYY1kqzmR48jzYMdUBw6ApGCW5dX2cRJG6ax2AMYILyNECgDyJYEPGjg78fCgzP9kHcilm2I5C8Nz4Q71/ggds/5U0sHJwIAAA=';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "234";
const author = process.env.OWNER_NAME || 'Nathaniel';
const packname = process.env.PACKNAME || 'Loki 444';
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
const url = process.env.URL || 'https://files.catbox.moe/46opwm.jpg';
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
