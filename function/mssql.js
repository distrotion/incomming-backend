const sql = require('mssql');
const config = {

}

exports.qurey = async (input) => {
  try {
    await sql.connect(config)
    const result = await sql.query(input)
    //  console.dir(result)
    return result;
  } catch (err) {
    return "err";
  }
};