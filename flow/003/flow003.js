const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow003', async (req, res) => {

    res.json("testflow3");
})




module.exports = router;





