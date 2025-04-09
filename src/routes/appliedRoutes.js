const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { isAuthenticated, isUser } = require('../middleware/sessionAuth');

// GET applied jobs
router.get('/jobs', isAuthenticated, isUser, async (req, res) => {
  const user = await User.findById(req.session.user._id).populate('appliedJobs');
  res.json(user.appliedJobs);
});

// GET applied internships
router.get('/internships', isAuthenticated, isUser, async (req, res) => {
  const user = await User.findById(req.session.user._id).populate('appliedInternships');
  res.json(user.appliedInternships);
});

module.exports = router;
