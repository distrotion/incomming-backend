const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow005', async (req, res) => {

    res.json("testflow5");
})

router.post('/sendToIT', (req, res) => {
    console.log("-------- queryItem' --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok",}];
    res.json(output)
})



module.exports = router;






