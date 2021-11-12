const express = require("express");
const router = express.Router();
var mssql = require('./../../function/mssql');


router.get('/flow004', async (req, res) => {

    res.json("testflow4");
})


router.post('/DataItemCall', async(req, res) => {
    console.log("-------- DataItemCall --------");
    console.log(req.body);
    input = req.body
    //------------------------>>>

    let output_data = [{
        Id: "1",
        GroupId: "AA",
        GroupName: "Appearance for Rust",
    },
    {
        Id: "2",
        GroupId: "BB",
        GroupName: "Appearance for Scratch",
    },
    {
        Id: "3",
        GroupId: "test",
        GroupName: "",
    },
    
    ];



    let output_data_r = {'data01':'','data02':'','data03':''};

    for (let i = 0; i < output_data.length; i++) {
        if(output_data[i]['GroupName']==input['Qurey']){
            output_data_r['data01'] = output_data[i]['Id'];
            output_data_r['data02'] = output_data[i]['GroupId'];
            output_data_r['data03'] = output_data[i]['GroupName'];
            break
        }   
    }

    
    //------------------------<<<
    output = [{ "status": "ok","output":output_data_r}];
    res.json(output)
});


module.exports = router;





