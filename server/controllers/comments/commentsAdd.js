const { Users, Posts, Posts_comments } = require('../../models');
const { isAuthorized } = require('../token/accessToken');

module.exports = async (req, res) => {
  const { comment, post_id } = req.body;
  const accessTokenData = isAuthorized(req);

  console.log('accessTokenData', accessTokenData)

  const email = accessTokenData.email
  const user_id = accessTokenData.id

  if (!accessTokenData) {
    res.status(401).send({ data: null, message: '유효하지 않은 토큰입니다.' });
  } else {
    Posts_comments.create({ user_id, post_id, comment })
      .then((data) => {
        if (data) {
          res.status(201).send({ data: { user_id, post_id, email, comment }, message: '글 등록에 성공했습니다.' })
        }
        else res.status(401).json({ message: "요청이 잘못되었습니다." })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
      });
  }



}
