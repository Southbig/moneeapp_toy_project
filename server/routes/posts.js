const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.list);
router.post('/add', controllers.add);

module.exports = router;