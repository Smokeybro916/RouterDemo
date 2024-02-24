const express = require('express');
const router = express.Router();

router.get('/topsecret', (req, res) => {
  res.send('This is top secret')
})
router.get('/delete', (req, res) => {
  res.send('This is top secret')
})


module.exports = router;
