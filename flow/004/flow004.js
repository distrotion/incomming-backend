const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow004', async (req, res) => {

    res.json("testflow4");
})



module.exports = router;





