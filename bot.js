// dependencies
const discord = require('discord.js')
var token = require('./auth.json');
const bot = new discord.Client();
bot.on('ready', () => {
    console.log('Connected as:', bot.user);
});

// Event to listen to messages sent to the server where the bot is located
bot.on('message', message => {
    // So the bot doesn't reply to iteself
    if (message.author.bot) return;

    //reverse command
    if (message.content.indexOf('!reverse') === 0) {
      var text = message.content.substring(1);
      var reversed = '';
      var i = text.length;
      while (i > 0) {
          reversed += text.substring(i - 1, i);
          i--;
      }
      message.reply(reversed);
    }

    // 8ball command
    if (message.content.indexOf('!8ball') === 0) {
      var sayings = ['No', 'Yes.', 'STOP ASKING ME SO MANY QUESTIONS', 'Very doubtful.', 'It is certain.', 'Most likely.', 'My reply is no.'];
      var rand = sayings[Math.floor(Math.random() * sayings.length)];
      message.reply(rand)
    }
    // ping reply
    if (message.content.indexOf('ping') === 0) {
      message.reply('pong');
    }
    
});
bot.login(token.token);
