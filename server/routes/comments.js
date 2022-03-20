const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.commentsList);
router.post('/add', controllers.commentsAdd);

module.exports = router;