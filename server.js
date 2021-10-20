const express = require('express')
const app = express()
const cors = require("cors")
const router = express.Router();
const bodyParser = require('body-parser');
const port = 9210


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.use("/", require("./api"))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

