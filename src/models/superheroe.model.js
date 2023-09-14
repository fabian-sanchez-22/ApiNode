var dbConn = require("./../../config/db.config")

var Superheroe = (superheroe) => {
    this.nombre = superheroe.nombre
    this.apellido = superheroe.apellido
    this.nombre_heroe = superheroe.nombre_heroe
    this.ciudad = superheroe.ciudad
}

superheroe.create = (nuevo_superheroe, result) => {
    dbConn.query("INSERT INTO superheroe set ?", nuevo_superheroe, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null)
        } else {
            console.log(res.insertId);
            result(null, res.insertId)
        }
    })
}

module.export = Superheroe


Superheroe.findById = (id, result) => {
    dbConn.query("SELECT * FROM superheroe WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error", err);
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

Superheroe.findAll = (result) => {
    dbConn.query("SELECT * FROM superheroe", (err, res) => {
        if (err) {
            console.log("Error", err);
            result(err, null)
        } else {
            console.log("Superheroe", res);
            result(null, res)
        }
    })
}


Superheroe.update = (id, superheroe, result) => {
    dbConn.query("UPDATE superheroe SET nombre=?, apellido=?, nombre_heroe=?, ciudad=? WHERE id=?",
        [
            superheroe.nombre,
            superheroe.apellido,
            superheroe.nombre_heroe,
            superheroe.ciudad,
            id
        ], (err, res) => {
            if (err) {
                console.log("Error", err);
                result(err, null)
            } else {
                console.log("Actualizado", res);
                result(null, res)
            }
        }
    )
}


Superheroe.delete = (id, result) => {
    dbConn.query("DELETE * FROM superheroe WHERE id=?", id,
        (err, res) => {
            if (err) {
                console.log("Error", err);
                result(err, null)
            } else {
                console.log("Eliminado", res);
                result(null, res)
            }
        }
    )
}