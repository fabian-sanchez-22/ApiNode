const Superheroe = require("../models/superheroe.model.js")

//create 
exports.create = (req, res) => {
    const nuevo_superheroe = new Superheroe(req.body)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: "No tiene datos" })
    } else {
        Superheroe.create(nuevo_superheroe, (err, superheroe) => {
            if (err) res.send(err);
            res.json({
                error: false,
                message: "Superheroe creado !!!",
                data: superheroe  //id superheroe -> modelo
            })
        })
    }
}

//find id
exports.findById = (req, res) => {
    Superheroe.findById(req, params.id, (err, superheroe) => {
        if (err) res.send(err)
        res.json(superheroe); //complete record
    })
}

//find all 
exports.findAll = (req, res) => {
    Superheroe.findAll((err, superheroe) => {
        if (err) res.send(err);
        console.log("res", superheroe);
        res.send(superheroe)
    })
}

//update
exports.update = (req, res) => {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            err: true,
            message: "Datos incompletos"
        })
    } else {
        Superheroe.update(req.params.id, new Superheroe(req.body), (err, superheroe) => {
            if (err) res.send(err)
            res.json({
                error: false,
                message: "Superheroe actualizado",
                data: superheroe
            })
        })
    }
}

//delete 
exports.delete = (req, res) => {
    Superheroe.delete(req.params.id, (err, superheroe) => {
        if (err) res.send(err)
        res.json({
            error: false,
            message: "Superheroe eliminado",
            data: superheroe
        })
    })
}