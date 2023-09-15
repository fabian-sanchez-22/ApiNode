import express from "express"
const router = express.Router()
import  {create, findById, findAll, update, deletes} from "../controllers/superheroe.controller.js"

//CRUD

router.post("/", create)
router.get("/:id", findById)
router.get("/", findAll)
router.put("/:id", update)
router.delete("/:id", deletes)


export default router