const mongoose = require('mongoose');
const app = require('./app');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.listen(process.env.PORT || 3333);
