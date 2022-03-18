const router = require('express').Router()
const controllers = require('../controllers')

router.post('/signup', controllers.signup); // 회원가입
// router.post('/signin', controllers.signin); // 로그인
// router.post('/signout', controllers.signout); // 로그아웃

module.exports = router;