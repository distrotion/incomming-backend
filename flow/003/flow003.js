const express = require("express");
const router = express.Router();
// var mssql = require('./../../function/mssql');
var mongodb = require('./../../function/mongodb');

let DBNAME = "IncommingData_GAS12";
let COLECTIONNAME = "main_data_GAS12";

router.get('/flow003', async (req, res) => {

    res.json("testflow3");
})

router.post('/tblSAPGoodReceive_get', async (req, res) => {
    console.log("-------- tblSAPGoodReceive_get' --------");
    // console.log(req.body);
    let input = req.body;
    //--------------------------------->

    let output_data = [
        {
        MATNR: "24000001",
        CHARG: "12345678A",
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
        STATUS: "F",
        },
        {
            MATNR: "24000002",
            CHARG: "f2-2",
            MBLNR: "f3-2",
            BWART: "f4-2",
            MENGE: "f5-2",
            MEINS: "f6-2",
            MAT_FG: "f7-2",
            KUNNR: "f8-2",
            SORTL: "f9-2",
            NAME1: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
            CUST_LOT: "f11-2",
            PART_NM: "f12-2",
            PART_NO: "f13-2",
            PROCESS: "f14-2",
            OLDMAT_CP: "f15-2",
            STATUS: "F",
            }
    ];

    // let querystring  = `SELECT  [MATNR]
    // ,[CHARG]
    // ,[MBLNR]
    // ,[BWART]
    // ,[MENGE]
    // ,[MEINS]
    // ,[MAT_FG]
    // ,[KUNNR]
    // ,[SORTL]
    // ,[NAME1]
    // ,[CUST_LOT]
    // ,[PART_NM]
    // ,[PART_NO]
    // ,[PROCESS]
    // ,[OLDMAT_CP]
    // ,[STATUS]
    // FROM [SAPData_BP_GAS].[dbo].[tblSAPGoodReceive]`;
    // let query = await mssql.qurey(querystring);

    // let output_data = query[`recordsets`][0]
    // let data = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: output_data[0]['MATNR'] }, { CHARG: output_data[0]['CHARG'] } ] });
    let data
    // console.log(output_data[0]['MATNR']);
    // console.log(output_data[0]['CHARG'] );
    for(i=0;i<output_data.length;i++){
        data = []
        data = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: output_data[i]['MATNR'] }, { CHARG: output_data[i]['CHARG'] } ] });
        if(data.length >0){

            // if(arr.some(item => item.name === 'Blofeld')){

            // }
            // console.log("Appearance_for_Rust" in data[0]);
            // console.log("Appearance_for_Scratch" in data[0]);

            if("Appearance_for_Rust" in data[0]){
                output_data[i]["Appearance_for_Rust_status"] = data[0]['Appearance_for_Rust']['status']
            }else{
                output_data[i]["Appearance_for_Rust_status"] ='-'
            }
            if("Appearance_for_Scratch" in data[0]){
                output_data[i]["Appearance_for_Scratch_status"] = data[0]['Appearance_for_Scratch']['status']
            }else{
                output_data[i]["Appearance_for_Scratch_status"] ='-'
            }
          
        }else{
            output_data[i]["Appearance_for_Rust_status"] ='-'
            output_data[i]["Appearance_for_Scratch_status"] ='-'
        }
    }

    kj=0
    output_data_kj = [];

    for(i=0;i<output_data.length;i++){
        if(output_data[i]["Appearance_for_Rust_status"] === 'GOOD' && output_data[i]["Appearance_for_Scratch_status"] === 'GOOD'){

        }else{
            output_data_kj[kj]=  output_data[i];
            kj++
        }

    }



    // console.log(output_data);
    

    //<---------------------------------
    let output = [{ "status": "ok", "output": output_data_kj }];
    res.json(output)
})

router.post('/updateDataIncomming', async (req, res) => {
    console.log("-------- updateDataIncomming --------");
    // console.log(req.body);
    let input = req.body;
    //------------------------>>>

    // let output = await mongodb.find(DBNAME, COLECTIONNAME, { "CHARG": input['CHARG'] });
    let output = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: input['MATNR'] }, { CHARG: input['CHARG'] } ] });
    //{ $and: [ { MATNR: input['MATNR'] }, { CHARG: input['CHARG'] } ] }

    if (output.length > 0) {


        // if (input['Appearance_for_Rust'] !== null && input['Appearance_for_Rust'] !== undefined && input['Appearance_for_Rust'] !== "") {
        if (input['ITEM'] === "Appearance_for_Rust") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPiecesSelected":input['ITEMsPiecesSelected'],
                "specialAccPic01": input['ITEMspecialAccPic01'],
                "specialAccPic02": input['ITEMspecialAccPic02'],
                "specialAccPic03": input['ITEMspecialAccPic03'],
                "specialAccPic04": input['ITEMspecialAccPic04'],
                "specialAccPic05": input['ITEMspecialAccPic05'],
                
            }
            let upd = await mongodb.update(DBNAME, COLECTIONNAME, { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Rust: datain } });
            output = [{ "status": "ok" }];
            // } else if (input['Appearance_for_Scratch'] !== null && input['Appearance_for_Scratch'] !== undefined && input['Appearance_for_Scratch'] !== "") {
        } else if (input['ITEM'] === "Appearance_for_Scratch") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPiecesSelected":input['ITEMsPiecesSelected'],
                "specialAccPic01": input['ITEMspecialAccPic01'],
                "specialAccPic02": input['ITEMspecialAccPic02'],
                "specialAccPic03": input['ITEMspecialAccPic03'],
                "specialAccPic04": input['ITEMspecialAccPic04'],
                "specialAccPic05": input['ITEMspecialAccPic05'],
            }
            let upd = await mongodb.update(DBNAME, COLECTIONNAME, { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Scratch: datain } });
            output = [{ "status": "ok" }];
        } else {
            output = [{ "status": "nok" }];
        }


    } else {
        let UpdateData = {
            "MATNR": input['MATNR'],
            "CHARG": input['CHARG'],
            "MBLNR": input['MBLNR'],
            "BWART": input['BWART'],
            "MENGE": input['MENGE'],
            "MEINS": input['MEINS'],
            "MAT_FG": input['MAT_FG'],
            "KUNNR": input['KUNNR'],
            "SORTL": input['SORTL'],
            "NAME1": input['NAME1'],
            "CUST_LOT": input['CUST_LOT'],
            "PART_NM": input['PART_NM'],
            "PART_NO": input['PART_NO'],
            "PROCESS": input['PROCESS'],
            "OLDMAT_CP": input['OLDMAT_CP'],
            "STATUS": input['STATUS'],
            "UserNO": input['UserNO'],
        }
        let insertMany = await mongodb.insertMany(DBNAME, COLECTIONNAME, [UpdateData]);

        if (input['ITEM'] === "Appearance_for_Rust") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPiecesSelected":input['ITEMsPiecesSelected'],
                "specialAccPic01": input['ITEMspecialAccPic01'],
                "specialAccPic02": input['ITEMspecialAccPic02'],
                "specialAccPic03": input['ITEMspecialAccPic03'],
                "specialAccPic04": input['ITEMspecialAccPic04'],
                "specialAccPic05": input['ITEMspecialAccPic05'],
            }
            let upd = await mongodb.update(DBNAME, COLECTIONNAME, { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Rust: datain } });
            output = [{ "status": "ok" }];
            // } else if (input['Appearance_for_Scratch'] !== null && input['Appearance_for_Scratch'] !== undefined && input['Appearance_for_Scratch'] !== "") {
        } else if (input['ITEM'] === "Appearance_for_Scratch") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPiecesSelected":input['ITEMsPiecesSelected'],
                "specialAccPic01": input['ITEMspecialAccPic01'],
                "specialAccPic02": input['ITEMspecialAccPic02'],
                "specialAccPic03": input['ITEMspecialAccPic03'],
                "specialAccPic04": input['ITEMspecialAccPic04'],
                "specialAccPic05": input['ITEMspecialAccPic05'],
            }
            let upd = await mongodb.update(DBNAME, COLECTIONNAME, { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Scratch: datain } });
            output = [{ "status": "ok" }];
        } else {
            output = [{ "status": "nok" }];
        }

    }


    //------------------------<<<
    // output = [{ "status": "ok",}];
    res.json(output)
})

router.post('/getDataIncomming', async (req, res) => {
    console.log("-------- getDataIncomming' --------");
    // console.log(req.body);
    let input = req.body;
    //------------------------>>>

    let output = await mongodb.find(DBNAME, COLECTIONNAME, { $and: [ { MATNR: input['MATNR'] }, { CHARG: input['CHARG'] } ] });

    // console.log(output);

    if (output.length > 0) {

        output = [{ "status": "ok", output: output }];

    } else {
        output = [{ "status": "nok" }];
    }


    //------------------------<<<
    // output = [{ "status": "ok",}];
    res.json(output)
})


module.exports = router;





