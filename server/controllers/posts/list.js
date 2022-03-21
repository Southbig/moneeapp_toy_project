// 글 조회하기
const { Posts, Posts_comments } = require('../../models');

module.exports = async (req, res) => {
  try {
    const postsData = await Posts.findAll({
      attributes: [
        "id",
        "user_id",
        "message",
        "email",
        "total_comments",
      ],
      include: [
        { model: Posts_comments, attributes: ["id"] }
      ]
    })
    let postsList = postsData.map(el => {
      return {
        "id": el.id,
        "user_id": el.user_id,
        "email": el.email,
        "message": el.message,
        "total_comments": el.Posts_comments.length,
      }
    })

    return res.status(200).json({ data: postsList, message: "successfully posts show all" })
  }
  catch (err) {
    return res.status(500).json({ data: null, message: "server error" })
  }
}