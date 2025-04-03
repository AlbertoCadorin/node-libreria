const express = require('express');
const app = express();
const port = 3000;

const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middlewares/logger');

app.use(express.json());

app.use("/", logger);

app.use("/books", bookRoutes);

app.listen(port, () => {
    console.log(`Sono un server attivo sulla porta ${port}`)
});