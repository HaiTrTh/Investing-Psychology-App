const express = require('express');
const app = express();
const affirmationsRoutes = require('./routes/affirmationsRoutes');
const goalsRoutes = require('./routes/goalsRoutes');
const reflectionsRoutes = require('./routes/reflectionsRoutes');
const checklistRoutes = require('./routes/checklistRoutes');

app.use(express.json());

app.use('/api/affirmations', affirmationsRoutes );
app.use('/api/goals', goalsRoutes);

app.use('/api/reflections', reflectionsRoutes);
app.use('/api/checklist', checklistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
