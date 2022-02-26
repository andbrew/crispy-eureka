const express = require('express');

const router = express.Router();

function add(req, res, next) {
  const n1 = Number(req.params.n1);
  const n2 = Number(req.params.n2);
  res.json({
    result: n1 + n2
  });
  res.status(200);
  next();
}

function multiply(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  res.json({
    result: n1 * n2
  });
  res.status(200);
  next();
}

function divide(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  if(n2 == 0) {
    res.status(400);
    return next();
  }
  res.json({
    result: n1 / n2
  });
  res.status(200);
  next();
}

function power(req, res, next) {
  const n1 = req.body.n1;
  const n2 = req.body.n2;
  res.json({
    result: Math.pow(n1, n2)
  });
  res.status(200);
  next();
}

function substract(req, res, next) {
  const n1 = Number(req.params.n1);
  const n2 = Number(req.params.n2);
  res.json({
    result: n1 - n2
  });
  res.status(200);
  next();
}

router.get('/:n1/:n2', add, (req, res) => {res.send();});
router.post('/', multiply, (req, res) => {res.send();});
router.put('/', divide, (req, res) => {res.send();});
router.patch('/', power, (req, res) => {res.send();});
router.delete('/:n1/:n2', substract, (req, res) => {res.send();});

module.exports = router;
