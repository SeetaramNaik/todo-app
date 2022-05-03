const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const databaseConfig = require('./config/database');
const todo = require('./routers/todo.routes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//connection to database
databaseConfig();

//cors
app.use(cors({ origin: true, credentials: true }));

//middlewares
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('<h1>Server is up and running</h1>'));

//Todo routes
app.use('/api/todoapp',todo);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
