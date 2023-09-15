import mysql from "mysql"

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "superheroe"
});

dbConn.connect((err) => {
    if (err) throw err;
    console.log("Db conectada");
})

export default dbConn;

