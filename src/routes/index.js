import { getList, getAll } from '../actions'

const routes = (app, db) => {
  app.route("/lists").get((req, res) => res.send(getAll(db)))

  app.route("/lists/:id")
    .get((req, res) => {
      return res.send(getList(db, req.params.id))
    })
    .put((req, res) => res.send("PUT request successful"))

}

export default routes
