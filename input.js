const {MOVEMENT_KEYS, MESSAGES} = require('./constants');
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVEMENT_KEYS.UP) {
    connection.write('Move: up');
  }
  if (key === MOVEMENT_KEYS.DOWN) {
    connection.write('Move: down');
  }
  if (key === MOVEMENT_KEYS.LEFT) {
    connection.write('Move: left');
  }
  if (key === MOVEMENT_KEYS.RIGHT) {
    connection.write('Move: right');
  }
  if (key === MESSAGES.A[0]) {
    connection.write(MESSAGES.A[1]);
  }
  if (key === MESSAGES.B[0]) {
    connection.write(MESSAGES.B[1]);
  }
  if (key === MESSAGES.C[0]) {
    connection.write(MESSAGES.C[1]);
  }
};

module.exports = { setupInput };