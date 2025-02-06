const express = require('express');
const { getProfile, updateProfile, uploadProfilePicture } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getProfile);
router.put('/update', authMiddleware, updateProfile);
router.post('/upload', authMiddleware, upload.single('profilePic'), uploadProfilePicture);

module.exports = router;
