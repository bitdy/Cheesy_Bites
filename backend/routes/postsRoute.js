const express = require('express');
const router = express.Router();
const {
  getPost
} = require('../controllers/postController');

router.route('/').get(getPost)

router.get("/posts", async (req, res) => {
  res.json({ message: "Hello from post!" });
});


module.exports = router;
