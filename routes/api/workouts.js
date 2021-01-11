const router = require('express').Router();
const workoutController = require('../../controller/workoutController')

router.route('/workout')
    .get(workoutController.findAll)
    .post(workoutController.create);


    router.route('/workout/:id')
        .put(workoutController.update)
        .delete(workoutController.remove);
// const {
//     Journal
// } = require('../../models');


// router
//     .get('/workout', ( req, res) => {
//         Journal
//             .find({})
//             .then(data => {
//                 res.json({
//                     success: true,
//                     data
//                 })
//             })
//             .catch(err => {
//                 res.json({
//                     success: false
//                 })
//             });
//     })
//     .post('/workout', (req, res) => {
//         console.log({
//             reqBody: req.body
//         })

//         Journal
//             .create({
//                 text: req.body.text
//             })
//             .then(data => {
//                 res.json({
//                     success: true,
//                     data
//                 });
//             })
//             .catch(err => {
//                 res.json({
//                     success: false
//                 })
//             })
//     })

// router
//     .delete( '/workout/:id', (req, res) => {
//         console.log(req.params);

//         Journal
//             .findByIdAndDelete(req.params.id)
//             .then(data => {
//                 res.json({
//                     success: true
//                 })
//             })
//             .catch(err => {
//                 res.json({
//                     success: false
//                 });
//             });
//     });

module.exports = router