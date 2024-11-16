let goals = [];

exports.getGoals = (req, res) => {
  res.json(goals);
};

exports.addGoal = (req, res) => {
  const { goal } = req.body;
  if (goal) {
    goals.push({ id: Date.now(), goal });
    res.status(201).json({ message: 'Goal added successfully!' });
  } else {
    res.status(400).json({ message: 'Goal cannot be empty!' });
  }
};
