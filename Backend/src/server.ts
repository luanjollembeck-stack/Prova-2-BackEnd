import express from 'express'


const app = express()
const port = 3000

app.use(express.json())

app.use()

app.listen(port, () => {
    console.log(`API funcionando em http://localhost:${port}`);
})