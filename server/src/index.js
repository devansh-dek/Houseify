const express = require('express');
// const bodyParser = require('body-')\
const bodyParser = require('body-parser');

const SetUpAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    app.use('/', (req, res) => {
        return res.status(201).json({
            message: "Working moye moye"
        })
    })
    app.listen(3000, async () => {
        console.log("Start at port ");


    })

}
SetUpAndStartServer();