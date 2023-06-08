const router = require('express').Router();
const dataFunc = require('../controller/dataController');

router.get('/', dataFunc.home );
router.get('/bollywood', dataFunc.bollywood);
router.get('/technology', dataFunc.technology);
router.get('/hollywood', dataFunc.hollywood);
router.get('/sport', dataFunc.sport);
router.get('/food', dataFunc.food);

module.exports = router;