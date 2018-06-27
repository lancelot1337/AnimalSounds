/* jshint esversion: 6*/

//Dependencies
const express   = require(`express`);
const app       = express();

app.use(express.static(__dirname + '/public'));

//Object containg sounds of animals
var soundsObj = {
    bat:    `screech`,
    bear:   `roar/growl`,
    bee:    `buzz`,
    cat:    `meow/purr`,
    cow:    `moo`,
    crow:   `caw`,
    dog:    `bark`,
    duck:   `quack`,
    pig:    `oink`,
    whale:  `sing`,

};

app.get(`/`, (req, res) => {
    //res.send(`Hello World!`);
    res.render(`index.ejs`, {
        text: `Press any button to see Animal's sound!`,
        sound: ``
    });
});

app.get(`/:id`, (req, res) => {
    res.render(`index.ejs`, {
        text: `Sound: `,
        sound: soundsObj[req.params.id]
    });
});

//Server management
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server connected at port: ${port}`);
});