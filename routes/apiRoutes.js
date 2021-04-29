const router = require("express").Router();
const Workout = require("../models/workout");

// Get range of workouts for dashboard
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create workout
router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create exercise
router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findById(params.id).update({
        $push: {
            exercises: body,
        },
    })
        .then((exercise) => {
            res.json(exercise);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;