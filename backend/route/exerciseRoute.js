const express = require('express');
const exerciseController = require('./../controllers/exerciseController');

const router = express.Router();

router.route('/').post(exerciseController.createExercise);

module.exports = router;