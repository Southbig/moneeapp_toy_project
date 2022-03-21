const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.list);  // 글 불러오기
router.post('/add', controllers.add); // 글 등록

module.exports = router;