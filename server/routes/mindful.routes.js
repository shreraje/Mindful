const router  = require('express').Router;
const { Mindful } = require('../models');

router
    .route('/')
    .get((req, res) => {
        Mindful 
            .find({})
            .then(data => {
                res.json({ success: true, data})
            })
            .catch(err => {
                res.json({success: false})
            }) ;
    })
    .post((req, res) => {
        console.log({ reqBody: req.body })

        Mindful 
            .create({
                text: req.body.text
            })
            .then(data => {
                res.json({ success: true, data });
            })
            .catch(err => {
                res.json({ success: false })
            })
    })

    router
        .route('/:id')
        .delete((req, res) => {
            console.log(req.params);

            Mindful 
                .findByIdAndDelete(req.params.id)
                .then(data => {
                    res.json({ success: true })
                })
                .catch(err => {
                    res.json({ success: false });
                });
        });

        module.exports = router