const net = require('net');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server 🐍');
    conn.write('Name: MJS');
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log("Connecting ...");

module.exports = connect();