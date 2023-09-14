import routes from "./routes/superheroe.routes.js"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/api/v1/superheroe", routes)

app.listen(PORT, async () => {
console.log("Servidor corriendo en el puerto" + PORT);
})