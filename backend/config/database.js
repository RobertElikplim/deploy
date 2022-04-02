import mysql from "mysql2";
 
// create the connection to database
const db = mysql.createConnection({
  host     : 'bronnas.c8dhriaohxpk.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'teamtwo2',
  database : 'team7',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.connect((err) =>{
    if(!err)
    console.log('Database connected');
    else
    console.log('Database not connected' + JSON.stringify(err, undefined, 2))
});


export default db;