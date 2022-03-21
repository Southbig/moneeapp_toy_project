// 로그인
const bcrypt = require('bcrypt'); // 비밀번호 암호화
const { Users } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../token/accessToken');

module.exports = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(422).send({ message: '모든 정보가 필요합니다' })
  }
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      if (err) {
        throw err;
      }
      else {
        Users.findOne({
          where: { email: req.body.email }
        })
          .then((data) => {
            // bcrypt.compareSync : 비밀번호와 암호화시킨 값이 같은지 비교하는 명령어
            if (!data || !bcrypt.compareSync(req.body.password, data.dataValues.password)) {
              return res.status(404).send({ message: 'err' })
            } else {
              delete data.dataValues.password;
              const AccessToken = generateAccessToken(data.dataValues);
              sendAccessToken(res, AccessToken);
            }
          })
      }
    })
  })
}