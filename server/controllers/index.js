module.exports = {

  //users
  signup: require('./users/signup'),
  signin: require('./users/signin'),
  signout: require('./users/signout'),
  auth: require('./users/auth'),

  //posts
  list: require('./posts/list'),
  add: require('./posts/add'),

  // postsComments
  commentsList: require('./comments/commentsList'),
  commentsAdd: require('./comments/commentsAdd'),
}