module.exports = (req, res) => {
  try {
    res.clearCookie('jwt', {
    });
    res.status(205).json({ message: 'Logged out successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
}