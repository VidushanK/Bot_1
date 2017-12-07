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

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  const messages = e.message.content
  if (messages == "ping")
  messages.sendMessage("pong");
  if (messages == "1")
  messages.sendMessage("2");
});
