function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).json({ error: 'User not authenticated' });
}

function isUser(req, res, next) {
  if (req.session.user.role === 'user') {
    return next();
  }
  return res.status(403).json({ error: 'Only users allowed' });
}

module.exports = { isAuthenticated, isUser };
