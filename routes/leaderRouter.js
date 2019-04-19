
const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
//use the body-parser module to parse the data sent
leaderRouter.use(bodyParser.json());
//Routes for the root path of the application
leaderRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send all the leaderships to you!');
})
.post((req, res, next) => {
 res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on leaderships');
})
.delete((req,res,next) => {
  res.end('Deleting all the leaderships!');
});

//routes for the specific leaderships

leaderRouter.route('/:leaderId').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send the leadership: ' + req.params.leaderId + ' to you!');
})
.post((req,res,next) => {
  res.end('Will add the leadership: '+ req.params.leaderId +' also: '+ req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on leadership:'+ req.params.leaderId );
})
.delete((req, res, next) => {
    res.end('Deleting leadership: ' + req.params.leaderId);
});

module.exports = leaderRouter;
