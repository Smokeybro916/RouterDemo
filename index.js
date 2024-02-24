const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin')

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admins', adminRoutes);

app.listen(3000, () => {
  console.log('Serving app on localhost')
})