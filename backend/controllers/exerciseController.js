const Exercise = require("../models/Exercise")
const catchAsync = require("../utils/catchAsync")

exports.createExercise = catchAsync(async (req, res, next) => {
    const exercise = await Exercise.create({
        name: req.body.name,
        muscleGroup: req.body.muscleGroup,
        rep: req.body.rep,
    })

    res.status(200).json({
        status: 'success',
        data: {
            data: exercise,
        }
    })
})