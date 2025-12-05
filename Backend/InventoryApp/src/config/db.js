require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
pool.connect((err,client,release)=>{
  if(err){
  console.error("Sorry!, DB is failed to connect");
}
  else{
console.log("App DataBase is connected");
release();}

});
module.exports = pool;
