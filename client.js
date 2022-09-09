const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: PS");
  });
  
  

  conn.setEncoding("utf8");
  conn.on("data", () => {
  console.log("you ded cuz you idled");
  });
  return conn;
};

module.exports = connect;