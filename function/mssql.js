const sql = require('mssql');
const config = {
  user: "sa",
  password: "P@ssw0rd",
  database: "test",
  server: '192.168.1.37',
  pool: {
    // max: 10,
    // min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  }
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


