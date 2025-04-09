const express = require('express');
const router = express.Router();
const Internship = require('../models/internshipModel');
const { isAuthenticated, isUser } = require('../middleware/sessionAuth');
const requireAuth = require('../middleware/authMiddleware');

// POST: Add a new internship (recruiter only)
router.post('/add', requireAuth, async (req, res) => {
  try {
    const { role, duration, stipend, location, requirements } = req.body;

    // Only recruiters can post internships
    if (req.user.role !== 'recruiter') {
      return res.status(403).json({ error: 'Access denied. Recruiter only route.' });
    }

    if (!role || !duration || !location || !requirements) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }

    const newInternship = new Internship({
      recruiter: req.user._id,
      role,
      duration,
      stipend,
      location,
      requirements
    });

    await newInternship.save();
    res.status(201).json({ message: 'Internship posted successfully', internship: newInternship });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/applicants/:internshipId', requireAuth, async (req, res) => {
  const { internshipId } = req.params;

  try {
    const internship = await Internship.findById(internshipId);

    // Check if internship exists and recruiter is the owner
    if (!internship) return res.status(404).json({ error: 'Internship not found' });
    if (String(internship.recruiter) !== String(req.user._id)) {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    // Find users who applied to this internship
    const applicants = await User.find({ appliedInternships: internshipId }).select('name email');

    res.status(200).json({ applicants });
  } catch (err) {
    console.error('Error fetching applicants:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const internships = await Internship.find({})
      .populate('recruiter', 'name email') // Include name & email of recruiter
      .sort({ createdAt: -1 }); // Optional: latest first

    res.status(200).json(internships);
  } catch (err) {
    console.error("Error fetching internships:", err);
    res.status(500).json({ error: 'Failed to fetch internships' });
  }
});

router.post('/apply/:internshipId', isAuthenticated, isUser, async (req, res) => {
  const { internshipId } = req.params;
  const userId = req.session.user._id;

  try {
    const user = await User.findById(userId);
    if (user.appliedInternships.includes(internshipId)) {
      return res.status(400).json({ error: 'Already applied' });
    }

    user.appliedInternships.push(internshipId);
    await user.save();

    res.json({ message: 'Successfully applied to internship' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
