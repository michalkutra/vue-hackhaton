var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/products', function(req, res, next) {
  res.json([{
      id: 1,
      name: 'test 1',
      price: 150,
      stock: 3
  },{
      id: 2,
      name: 'test 2',
      price: 100,
      stock: 0
  },{
      id: 3,
      name: 'test 3',
      price: 150,
      stock: 0
  },{
      id: 4,
      name: 'test 4',
      price: 10,
      stock: 3
  },{
      id: 5,
      name: 'test 5',
      price: 150,
      stock: 3
  },{
      id: 6,
      name: 'test 6',
      price: 150,
      stock: 3
  },{
      id: 7,
      name: 'test 7',
      price: 200,
      stock: 10
  }]);
});

module.exports = router;
