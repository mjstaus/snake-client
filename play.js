const { connect } = require("./client");
connect;

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};

setupInput
