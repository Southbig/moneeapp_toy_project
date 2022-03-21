const router = require('express').Router()
const controllers = require('../controllers')

router.get('/', controllers.commentsList); // 댓글 불러오기
router.post('/add', controllers.commentsAdd); // 댓글 등록

module.exports = router;