const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');
var mongodb = require('./../../function/mongodb');


router.get('/flow003', async (req, res) => {

    res.json("testflow3");
})

router.post('/updateDataIncomming', async (req, res) => {
    console.log("-------- queryItem' --------");
    console.log(req.body);
    let input = req.body;
    //------------------------>>>

    let output = await mongodb.find("IncommingData", "main_data", { "CHARG": input['CHARG'] });

    if (output.length > 0) {


        // if (input['Appearance_for_Rust'] !== null && input['Appearance_for_Rust'] !== undefined && input['Appearance_for_Rust'] !== "") {
        if (input['ITEM'] === "Appearance_for_Rust") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPic": input['ITEMspecialAccPic'],
            }
            let upd = await mongodb.update("IncommingData", "main_data", { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Rust: datain } });
            output = [{ "status": "ok" }];
            // } else if (input['Appearance_for_Scratch'] !== null && input['Appearance_for_Scratch'] !== undefined && input['Appearance_for_Scratch'] !== "") {
        } else if (input['ITEM'] === "Appearance_for_Scratch") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPic": input['ITEMspecialAccPic'],
            }
            let upd = await mongodb.update("IncommingData", "main_data", { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Scratch: datain } });
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
        }
        let insertMany = await mongodb.insertMany("IncommingData", "main_data", [UpdateData]);

        if (input['ITEM'] === "Appearance_for_Rust") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPic": input['ITEMspecialAccPic'],
            }
            let upd = await mongodb.update("IncommingData", "main_data", { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Rust: datain } });
            output = [{ "status": "ok" }];
            // } else if (input['Appearance_for_Scratch'] !== null && input['Appearance_for_Scratch'] !== undefined && input['Appearance_for_Scratch'] !== "") {
        } else if (input['ITEM'] === "Appearance_for_Scratch") {
            let datain = {
                "status": input['ITEMstatus'],
                "specialAccStatus": input['ITEMspecialAccStatus'],
                "specialAccCOMMENT": input['ITEMspecialAccCOMMENT'],
                "specialAccPic": input['ITEMspecialAccPic'],
            }
            let upd = await mongodb.update("IncommingData", "main_data", { "CHARG": input['CHARG'] }, { $set: { Appearance_for_Scratch: datain } });
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
    console.log("-------- queryItem' --------");
    console.log(req.body);
    let input = req.body;
    //------------------------>>>

    let output = await mongodb.find("IncommingData", "main_data", { "CHARG": input['CHARG'] });

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





