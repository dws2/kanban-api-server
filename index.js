import express from "express"
import { restRouter } from './api/restRouter'
import {setupMiddleware} from './middleware';
// init database

const app = express()
const PORT = process.env.PORT || 3000
app.get("/", (req, res) => res.send(`Welcome to the example kanban api. Check out the readme for details`))
setupMiddleware(app)
app.use('/api', restRouter)
app.get("*", (req, res) => res.send(`Express running on port ${PORT}`))
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
