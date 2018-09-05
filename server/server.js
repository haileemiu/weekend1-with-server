const express = require('express/');

const PORT = 2000;

const app = express();

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('listening', PORT)
});