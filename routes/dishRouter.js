
const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

//Use the body-parser module to parse data sent
dishRouter.use(bodyParser.json());

//Routes for the root path of the application
dishRouter.route('/')
.all((req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req,res,next) => {
  res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
 res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) => {
  res.end('Deleting all the dishes!');
});

//routes for the specific dishes charcterised by the Id
dishRouter.route('/:dishId').all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res, next) => {
  res.end('Will send the dish: ' + req.params.dishId + ' to you!');
})
.post((req,res,next) => {
  res.end('Will add the dish: '+ req.params.dishId +' also: '+ req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on dish:'+ req.params.dishId );
})
.delete((req, res, next) => {
    res.end('Deleting dish: ' + req.params.dishId);
});

module.exports = dishRouter;
