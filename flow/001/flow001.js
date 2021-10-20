const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow001', async (req, res) => {

    res.json("testflow1");
})

//------------------------------------------------ user

router.post('/tblSAPGoodReceive_get', async (req, res) => {
    // console.log(req.body);
    let input = req.body;
    //--------------------------------->

    let output_data = [
        {
        MATNR: "f1",
        CHARG: "f2",
        MBLNR: "f3",
        BWART: "f4",
        MENGE: "f5",
        MEINS: "f6",
        MAT_FG: "f7",
        KUNNR: "f8",
        SORTL: "f9",
        NAME1: "f10",
        CUST_LOT: "f11",
        PART_NM: "f12",
        PART_NO: "f13",
        PROCESS: "f14",
        OLDMAT_CP: "f15",
        STATUS: "f16",
        },
        {
            MATNR: "f1-2",
            CHARG: "f2-2",
            MBLNR: "f3-2",
            BWART: "f4-2",
            MENGE: "f5-2",
            MEINS: "f6-2",
            MAT_FG: "f7-2",
            KUNNR: "f8-2",
            SORTL: "f9-2",
            NAME1: "f10-2",
            CUST_LOT: "f11-2",
            PART_NM: "f12-2",
            PART_NO: "f13-2",
            PROCESS: "f14-2",
            OLDMAT_CP: "f15-2",
            STATUS: "f16-2",
            }
    ];

    

    // let dbinput = `[SAPData_BP_GAS].[dbo].[tblSAPGoodReceive]`;
    // let querystring  = `SELECT * From '${dbinput}' where [user]='${input.user}'`;
    // db = await mssql.qurey(querystring);

    //<---------------------------------
    output = [{ "status": "ok","output":output_data }];
    res.json(output)
})




module.exports = router;


// SELECT TOP (1000) 
//        [MATNR]
//       ,[CHARG]
//       ,[MBLNR]
//       ,[BWART]
//       ,[MENGE]
//       ,[MEINS]
//       ,[MAT_FG]
//       ,[KUNNR]
//       ,[SORTL]
//       ,[NAME1]
//       ,[CUST_LOT]
//       ,[PART_NM]
//       ,[PART_NO]
//       ,[PROCESS]
//       ,[OLDMAT_CP]
//       ,[STATUS]
//   FROM [SAPData_BP_GAS].[dbo].[tblSAPGoodReceive]


