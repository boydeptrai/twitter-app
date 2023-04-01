const express = require('express');

const {getAllPosts, createOnePost, updateOnePost, deleteOnePost} = require('../controllers/postController');
const {verifyToken} = require('../middlewares/verifyToken')
const router = express.Router();

router.route('/').get(getAllPosts).post(verifyToken,createOnePost);
router.route('/:postId').put(verifyToken,updateOnePost).delete(verifyToken, deleteOnePost);

module.exports = router;