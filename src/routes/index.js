var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: "Violet's Houseplant Rescue" });
});
router.get('/adopt', function(req, res, next) {
    res.render('adopt', { title: "VHR - Adopt a plant!" });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: "Contact VHR" });
});

router.get('/credits', function(req, res, next) {
    res.render('credits', { title: "VHR Photo Credits" });
});

router.get('/donate', function(req, res, next) {
    res.render('donate', { title: "How to support VHR" });
});

router.get('/merch', function(req, res, next) {
    res.render('merch', { title: "VHR Merchandise" });
});


router.get('/resources', function(req, res, next) {
    res.render('resources', { title: "VHR Houseplant Resources" });
});

router.get('/resources/:id?', function(req, res, next) {
    res.render('articles/resource'+ req.params.id, { title: "Resources" });
});


router.get('/success', function(req, res, next) {
    res.render('success', { title: "VHR Success Stories!" });
});

router.get('/volunteer', function(req, res, next) {
    res.render('volunteer', { title: "Volunteer with VHR!" });
});



module.exports = router;