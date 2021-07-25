const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  console.log(`OK`)
})
 
function keepAlive() {
  server.listen(3001, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;