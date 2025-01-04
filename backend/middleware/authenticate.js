const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
  const token = req.header('Authorization')?.split(' ')[1]; // Expect "Bearer <token>"
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {_id: decoded.id};
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authenticate;