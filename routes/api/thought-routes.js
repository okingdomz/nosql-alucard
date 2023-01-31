const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);
// to pull the reaction id using params and deleting it by the Id
// api/thoughts/:thougthId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);
module.exports = router;