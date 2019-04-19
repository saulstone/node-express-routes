
//Require needed modules such as express,http,morgan and body parser.
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Require our routers
const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');

//Setting the port and host name of server
const hostname = 'localhost';
const port = 3000;

//Build our application
const app = express();
//Use morgan for logging stuff in the console
app.use(morgan('dev'));
app.use(bodyParser.json());

//the required routers
app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);
//Serve static files in the public folder in the same directory
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
//start the server
server.listen(port,hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
