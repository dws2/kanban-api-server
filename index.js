import express from "express"
import { restRouter } from './api/restRouter'
import {db} from './db'
import {setupMiddleware} from './middleware';
// init database
db().then( () => {
  
  const app = express()
  const PORT = 3000
  setupMiddleware(app)
  app.use('/api', restRouter)
  app.get("/", (req, res) => res.send(`Express running on port ${PORT}`))
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

})
.catch( err => console.log(err))