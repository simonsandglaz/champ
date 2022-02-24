const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('welcome', {title: 'Registration'});
});

router.get('/registration', (req, res) => {
	res.render('form', {title: 'Registration'});
});

router.post('/', (req, res) => {
	res.render('assessment', { title: 'Welcome to CHAMP' });
});

router.get('/welcome', (req, res) => {
	res.render('welcome', { title: 'Welcome to CHAMP' });
});

router.get('/welcome2', (req, res) => {
	res.render('welcome2', { title: 'Welcome to CHAMP' });
});

router.get('/assessment', (req, res) => {
	res.render('assessment', { title: 'My Assessment' });
});

router.get('/dailylife', (req, res) => {
	res.render('dailylife/question1', { title: 'My Daily Life', question: {id: 1, type: 'dailylife'} });
});

router.get('/dailylife/:id', (req, res) => {
	if (req.params.id == "11"){
		res.render('mentalhealth/question1', { title: 'My Daily Life', question: {id: 1, type: 'mentalhealth'} });
	}
	else {
		res.render('dailylife/question' + req.params.id, { title: 'My Daily Life', question: {id: parseInt(req.params.id), type: 'dailylife'} });
	}
});

router.get('/dailylife/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Daily Life', question: {id: req.params.id, type: 'dailylife'} });
});

router.get('/mentalhealth', (req, res) => {
	res.render('mentalhealth/question1', { title: 'My Mental Health', question: {id: 1, type: 'mentalhealth'} });
});

router.get('/mentalhealth/:id', (req, res) => {
	if (req.params.id == "2"){
		res.render('physicalhealth/question1', { title: 'Physical Health', question: {id: 1, type: 'physicalhealth'} });
	}
	res.render('mentalhealth/question' + req.params.id, { title: 'My Mental Health', question: {id: parseInt(req.params.id), type: 'mentalhealth'} });
});

router.get('/mentalhealth/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Mental Health', question: {id: req.params.id, type: 'mentalhealth'} });
});

router.get('/physicalhealth', (req, res) => {
	res.render('physicalhealth/question1', { title: 'My Physical Health', question: {id: 1, type: 'physicalhealth'} });
});

router.get('/physicalhealth/:id', (req, res) => {
	if (req.params.id == "6"){
		res.render('social/question1', { title: 'Social', question: {id: 1, type: 'social'} });
	}
	res.render('physicalhealth/question' + req.params.id, { title: 'My Physical Health', question: {id: parseInt(req.params.id), type: 'physicalhealth'} });
});

router.get('/physicalhealth/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Physical Health', question: {id: req.params.id, type: 'physicalhealth'} });
});


router.get('/social', (req, res) => {
	res.render('social/question1', { title: 'My Social Life', question: {id: 1, type: 'social'} });
});

router.get('/social/:id', (req, res) => {
	if (req.params.id == "11"){
		res.render('summary', { title: 'Summary', question: {id: 1, type: 'summary'} });
	}
	res.render('social/question' + req.params.id, { title: 'My Social Life', question: {id: parseInt(req.params.id), type: 'social'} });
});

router.get('/social/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Social Life', question: {id: req.params.id, type: 'social'} });
});

router.get('/summary', (req, res) => {
	res.render('summary', { title: 'Summary'});
});

router.get('/thankyou', (req, res) => {
	res.render('thankyou', { title: 'Thank You'});
});

router.get('/clinicsummary', (req, res) => {
	res.render('oncologistsummary', { title: "Clinic Summary"})
});

router.get('/patientsummary', (req, res) => {
	res.render('patientsummary', { title: "Patient Summary"})
});

module.exports = router;