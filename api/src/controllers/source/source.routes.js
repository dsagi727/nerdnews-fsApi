const router = require('express').Router();
const { create, findAll, findById, update, remove } = require('./source.controller');

router.route('/').get(findAll).post(create);
router.route('/:id').get(findById).patch(update).delete(remove);

module.exports = router;
