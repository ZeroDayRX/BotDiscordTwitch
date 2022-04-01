
const tmi = require('tmi.js');

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'zerobottwitch',
    password: 'oauth:t8mj0axau91mp26l9h5xxx94ncxnmb'
  },
  channels: [
    'ZeroDayRX'
  ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  if(self || !message.startsWith('!')) {
    return;
  }

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();


 if(command === 'zeroday') {
    client.say(channel, `@${tags.username}, porque invocastes o nome profano?`);
  } else if(command === 'roll') {
    const result = Math.floor(Math.random() * 20) + 1;
    client.say(channel, `@${tags.username}, Voce tirou ${result}.`);
  }else if(command == 'test'){
    client.say(channel, `@${tags.username}, ${message}.`);
        
  }
});