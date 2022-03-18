const { Users } = require('../../models');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(422).json({ data: null, message: '모든 항목은 필수입니다.' })
  } try {
    // try/catch를 이용
    //두 개 이상 중복 확인을 할 때는 findOrCreate보단 findOne으로 하나씩 찾고 각각 중복검사를 한다
    //findOrCreate에 두 개 이상의 컬럼 값을 넣으면 두 개 모두 중복되었을 때만 중복 에러가 나온다.
    const userEmail = await Users.findOne({
      where: {
        email
      },
    })


    console.log('userEmail', userEmail)

    if (userEmail) {
      res.status(409).json({ message: '이미 존재하는 이메일입니다.' })
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
          if (err) {
            throw err;
          } else {
            await Users.create({
              email,
              password: hash,
            })
            res.status(201).json({ message: "회원가입에 성공하였습니다." });
          }
        })
      })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};