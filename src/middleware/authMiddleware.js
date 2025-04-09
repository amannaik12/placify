const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
  if (!req.session.userId) return res.status(401).json({ error: 'Unauthorized' });
  const user = await User.findById(req.session.userId);
  if (!user) return res.status(401).json({ error: 'User not found' });
  req.user = user;
  next();
};

module.exports = requireAuth;
