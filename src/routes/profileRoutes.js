const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/authMiddleware');
const upload = require('../middleware/upload');
const { getProfile, updateProfile } = require('../controllers/profileController');

router.get('/', requireAuth, getProfile);
router.post('/', requireAuth, upload.single('resume'), updateProfile);

module.exports = router;
