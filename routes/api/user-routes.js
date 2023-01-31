// const User = require('../../models/User');
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);
// /api/courses


// /api/thoughts/:thoughtId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);
// api/thoughts/:thoughtId/reactions
// to pull the reaction id using params and deleting it by the Id
// api/thoughts/:thougthId/reactions/:reactionId
router.route('/:userId/friends/:friendsId').post(addFriend).delete(removeFriend);





// /api/users/:userId
// router.route('/:userId').get(getSingleUser).delete(deleteUser);
// updating user
// /api/users/:userId
// router.route('/:userId').put(updateUser);

// /api/users/:friendId/friends
// router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;


// const userRouter = Router();

// userRouter.route('/').get((req, res) => {
//     User.find()
//       .then((users) => res.json(users))
//       .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//       })
//     })
// userRouter.route('/signup', (req, res) => {
//     User.create(req.body)
//       .then((user) => res.json(user))
//       .catch((err) => res.status(500).json(err));
//   })
//     module.exports = userRouter;