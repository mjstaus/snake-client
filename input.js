const { USER_INPUTS } = require("./constants");
// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
  if (Object.keys(USER_INPUTS.movementKeys).includes(key)) {
    connection.write(USER_INPUTS.movementKeys[key]);
  }
  if (Object.keys(USER_INPUTS.messages).includes(key)) {
    connection.write(USER_INPUTS.messages[key]);
  }
};

module.exports = { setupInput };
