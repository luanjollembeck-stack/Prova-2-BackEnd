import express from "express"   
import { refrigeranteRouter } from "./Routes/refrigerante.routes.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/refrigerante", refrigeranteRouter)

app.listen(port, () => {
    console.log(`API funcionando em http://localhost:${port}`);
})