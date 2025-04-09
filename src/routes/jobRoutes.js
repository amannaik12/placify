const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');
const User = require('../models/userModel');
const requireAuth = require('../middleware/authMiddleware');
const { isAuthenticated, isUser } = require('../middleware/sessionAuth');

// POST: Add a new job (Recruiter only)
router.post('/add', requireAuth, async (req, res) => {
    try {
      const { role, duration, salary, location, requirements } = req.body;
  
      // Only recruiters can post internships
      if (req.user.role !== 'recruiter') {
        return res.status(403).json({ error: 'Access denied. Recruiter only route.' });
      }
  
      if (!role || !duration || !location || !requirements) {
        return res.status(400).json({ error: 'Please fill all required fields' });
      }

      const newJob = new Job({
        recruiter: req.user._id,
        role,
        duration,
        salary,
        location,
        requirements
      });

      await newJob.save();
      res.status(201).json({ message: 'job posted successfully', job: newJob });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// POST: Apply to a job (User only)
router.post('/apply/:jobId', isAuthenticated, isUser, async (req, res) => {
  const { jobId } = req.params;
  const userId = req.session.user._id;

  try {
    const user = await User.findById(userId);
    if (user.appliedJobs.includes(jobId)) {
      return res.status(400).json({ error: 'Already applied' });
    }

    user.appliedJobs.push(jobId);
    await user.save();

    res.json({ message: 'Successfully applied to job' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/applicants/:jobId', requireAuth, async (req, res) => {
    const { jobId } = req.params;
  
    try {
      const job = await Job.findById(jobId);
      // Check if job exists and recruiter is the owner
      if (!job) return res.status(404).json({ error: 'Job not found' });
      if (String(job.recruiter) !== String(req.user._id)) {
        return res.status(403).json({ error: 'Unauthorized access' });
      }
      // Find users who applied to this job
      const applicants = await User.find({ appliedJobs: jobId }).select('name email');
  
      res.status(200).json({ applicants });
    } catch (err) {
      console.error('Error fetching applicants:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// GET: Fetch all jobs
router.get('/', async (req, res) => {
    try {
      const jobs = await Job.find({})
        .populate('recruiter', 'name email') // populate recruiter name and email
        .sort({ createdAt: -1 }); // optional: show newest first
  
      res.status(200).json(jobs);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      res.status(500).json({ error: 'Failed to fetch jobs' });
    }
  });
  

// ✅ Final export (ONLY ONCE)
module.exports = router;
