const express = require('express');
// const bodyParser = require('body-')\
const bodyParser = require('body-parser');
const { User } = require('./models/index');
const routes = require('./routes/index')
const SetUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    app.use('/api', routes);
    app.listen(3000, async () => {
        console.log("Start at port ");

    })

}
SetUpAndStartServer();