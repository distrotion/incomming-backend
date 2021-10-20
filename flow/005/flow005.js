const express = require("express");
const router = express.Router();
var mssql = require('../../function/mssql');


router.get('/flow005', async (req, res) => {

    res.json("testflow5");
})





module.exports = router;






