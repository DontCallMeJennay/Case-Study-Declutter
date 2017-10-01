var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: "Violet's Houseplant Rescue" });
});
router.get('/adopt', function(req, res, next) {
    res.render('adopt', { title: "Violet's Houseplant Rescue" });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: "Violet's Houseplant Rescue" });
});

router.get('/donate', function(req, res, next) {
    res.render('donate', { title: "Violet's Houseplant Rescue" });
});

router.get('/merch', function(req, res, next) {
    res.render('merch', { title: "Violet's Houseplant Rescue" });
});

router.get('/resources', function(req, res, next) {
    res.render('resources', { title: "Violet's Houseplant Rescue" });
});

router.get('/success', function(req, res, next) {
    res.render('success', { title: "Violet's Houseplant Rescue" });
});

router.get('/volunteer', function(req, res, next) {
    res.render('volunteer', { title: "Violet's Houseplant Rescue" });
});



module.exports = router;