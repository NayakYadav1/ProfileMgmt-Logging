const User = require('../models/User');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

exports.updateProfile = async (req, res) => {
  const { name, address, phone } = req.body;
  const updatedUser = await User.findByIdAndUpdate(req.user.id, { name, address, phone }, { new: true });
  res.json(updatedUser);
};

exports.uploadProfilePicture = async (req, res) => {
  await User.findByIdAndUpdate(req.user.id, { profilePic: req.file.path });
  res.json({ message: 'Profile picture uploaded', profilePic: req.file.path });
};
