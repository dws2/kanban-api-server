import express from "express"
import { restRouter } from './api/restRouter'
import {db} from './db'
import {setupMiddleware} from './middleware';
// init database

const app = express()
const PORT = 3333
setupMiddleware(app)
app.use('/api', restRouter)
app.get("/", (req, res) => res.send(`Express running on port ${PORT}`))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
