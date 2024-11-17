const express = require('express');
const app = express();
app.use(express.json());



 const affirmationsRoutes = require('./routes/affirmationsRoutes');
 app.use('/api/affirmations', affirmationsRoutes );

//  const reflectionsRoutes = require('./routes/reflectionsRoutes');
//  app.use('/api/reflections', reflectionsRoutes);
 
//  const checklistRoutes = require('./routes/checklistRoutes');
//  app.use('/api/checklist', checklistRoutes);

//  const goalsRoutes = require('./routes/goalsRoutes');
//  app.use('/api/goals', goalsRoutes);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
