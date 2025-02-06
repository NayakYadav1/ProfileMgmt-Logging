const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  const activities = await Activity.find({ userId: req.user.id }).sort({ timestamp: -1 });
  res.json(activities);
};
