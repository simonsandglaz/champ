const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('form', {title: 'Registration'});
});

router.post('/', (req, res) => {
	res.render('assessment', { title: 'My Assessment' });
});

router.get('/assessment', (req, res) => {
	res.render('assessment', { title: 'My Assessment' });
});

router.get('/dailylife', (req, res) => {
	res.render('dailylife/question1', { title: 'My Daily Life', question: {id: 1, type: 'dailylife'} });
});

router.get('/dailylife/:id', (req, res) => {
	res.render('dailylife/question' + req.params.id, { title: 'My Daily Life', question: {id: parseInt(req.params.id), type: 'dailylife'} });
});

router.get('/dailylife/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Daily Life', question: {id: req.params.id, type: 'dailylife'} });
});

router.get('/mentalhealth', (req, res) => {
	res.render('mentalhealth/question1', { title: 'My Mental Health', question: {id: 1, type: 'mentalhealth'} });
});

router.get('/mentalhealth/:id', (req, res) => {
	res.render('mentalhealth/question' + req.params.id, { title: 'My Mental Health', question: {id: parseInt(req.params.id), type: 'mentalhealth'} });
});

router.get('/mentalhealth/:id/comments', (req, res) => {
	res.render('comments', { title: 'My Mental Health', question: {id: req.params.id, type: 'mentalhealth'} });
});

module.exports = router;