const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const port = 8008;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('Listening at port ' + port);
});