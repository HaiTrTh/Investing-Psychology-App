exports.getRandomAffirmation = (req, res) => {
  const affirmations = [
    "Stay patient and stick to your plan.",
    "Investing is a marathon, not a sprint.",
    "Market volatility is an opportunity, not a setback.",
  ];
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  res.json({ affirmation: affirmations[randomIndex] });
};
