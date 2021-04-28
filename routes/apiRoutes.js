const router = require("express").Router();
const Workout = require("../models/workout");

// Get range of workouts for dashboard
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(exercises => {
            res.json(exercises);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Create workout
// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//         .then(workout => {
//             res.json(workout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

module.exports = router;