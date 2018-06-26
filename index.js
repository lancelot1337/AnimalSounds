/* jshint esversion:  */

//Dependencies
const express   = require(`express`);
const app       = express();

app.get(`/`, (req, res) => {
    res.send(`Hello World!`);
});

//Server management
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server connected at port: ${port}`);
});