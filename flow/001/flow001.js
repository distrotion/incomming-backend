const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');
var mongodb = require('./../../function/mongodb');


router.get('/flow001', async (req, res) => {

    res.json("testflow1");
})

//------------------------------------------------ user

// router.post('/tblSAPGoodReceive_get', async (req, res) => {
//     console.log(req.body);
//     let input = req.body;
//     //--------------------------------->

//     let output_data = [
//         {
//         MATNR: "24000001",
//         CHARG: "12345678A",
//         MBLNR: "f3",
//         BWART: "f4",
//         MENGE: "f5",
//         MEINS: "f6",
//         MAT_FG: "f7",
//         KUNNR: "f8",
//         SORTL: "f9",
//         NAME1: "f10",
//         CUST_LOT: "f11",
//         PART_NM: "f12",
//         PART_NO: "f13",
//         PROCESS: "f14",
//         OLDMAT_CP: "f15",
//         STATUS: "F",
//         },
//         {
//             MATNR: "24000002",
//             CHARG: "f2-2",
//             MBLNR: "f3-2",
//             BWART: "f4-2",
//             MENGE: "f5-2",
//             MEINS: "f6-2",
//             MAT_FG: "f7-2",
//             KUNNR: "f8-2",
//             SORTL: "f9-2",
//             NAME1: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//             CUST_LOT: "f11-2",
//             PART_NM: "f12-2",
//             PART_NO: "f13-2",
//             PROCESS: "f14-2",
//             OLDMAT_CP: "f15-2",
//             STATUS: "F",
//             }
//     ];

//     // let querystring  = `SELECT  [MATNR]
//     // ,[CHARG]
//     // ,[MBLNR]
//     // ,[BWART]
//     // ,[MENGE]
//     // ,[MEINS]
//     // ,[MAT_FG]
//     // ,[KUNNR]
//     // ,[SORTL]
//     // ,[NAME1]
//     // ,[CUST_LOT]
//     // ,[PART_NM]
//     // ,[PART_NO]
//     // ,[PROCESS]
//     // ,[OLDMAT_CP]
//     // ,[STATUS]
//     // FROM [SAPData_BP_GAS].[dbo].[tblSAPGoodReceive]`;
//     // let query = await mssql.qurey(querystring);

//     // let output_data = query[`recordsets`][0]
//     // let data = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: output_data[0]['MATNR'] }, { CHARG: output_data[0]['CHARG'] } ] });

//     console.log(output_data[0]['MATNR']);
//     console.log(output_data[0]['CHARG'] );
//     // for(i=0;i<output_data.length;i++){
//     //     let data = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: output_data[i]['MATNR'] }, { CHARG: output_data[i]['CHARG'] } ] });
//     //     print(data);
//     // }

    

//     //<---------------------------------
//     let output = [{ "status": "ok", "output": output_data }];
//     res.json(output)
// })




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