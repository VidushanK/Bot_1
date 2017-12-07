// dependencies
var auth = require('./auth.json');
var Discordie = require("discordie");

var Events = Discordie.Events;
var client = new Discordie();

// token stored in a file that is ignored by git
client.connect({ token: auth.token });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
console.log("Connected as: " + client.User.username);
});

 var sayings = ['Hell No', 'Yes.', 'STOP ASKING ME SO MANY QUESTIONS', 'Very doubtful.', 'It is certain.', 'Most likely.', 'My reply is no.', 'Fuck no.', "Why is ZEROevoL so cool?"];

var getRandomWord = function () {
      return sayings[Math.floor(Math.random() * sayings.length)];
  };

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  const messages = e.message.content
  if (messages == "ping")
  messages.sendMessage("pong");
  if (messages == "1")
  messages.sendMessage("2");
  if (messages == "!8ball")
  messages.sendMessage(getRandomWord);
});
