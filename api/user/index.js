const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');



router.get('/', ctrl.search);
router.delete('/:id', ctrl.del)

module.exports = router;