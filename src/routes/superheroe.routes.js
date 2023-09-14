import express from "express"
const router = express.Router()
const  superheroeController = require("../controllers/superheroe.controller.js")
// const superheroeController = require("../controllers/superheroe.controller")

//CRUD

router.post("/", superheroeController.create)
router.get("/:id", superheroeController.findById)
router.get("/", superheroeController.findAll)
router.put("/:id", superheroeController.updateById)
router.delete("/:id", superheroeController.removeById)

export default router