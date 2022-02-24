const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow002', async (req, res) => {

    res.json("testflow2");
})

router.post('/queryItem', (req, res) => {
    console.log("-------- queryItem' --------");
    console.log(req.body);
    //------------------------>>>


    //------------------------<<<
    output = [{ "status": "ok","output":{ "list01": ["","Appearance_for_Rust","Appearance_for_Scratch"]}}];
    res.json(output)
})



module.exports = router;





