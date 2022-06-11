import express from 'express'
import image from './api/image'

const routes = express.Router()
routes.get('/', (req, res) => {
  res.send(
    '<h1>Image processing API</h1><p> go to <code><a href="api/img">/api/img</a></code> to play with the image api </p><br>available endpoints:<br><ul><li><code><a href="api/img/show">/api/img/show</a></code></li><li><code><a href="api/img/resize">/api/img/resize</a></code></li></ul>should contain a valid filename in the querystring as <code>?filename=image</code><br>Option allowed for the resize endpoint:<br><ul><li><code>?width=100</code></li><li><code>?height=100</code></li><li><code>?width=100&height=100</code></li></ul>'
  )
})
routes.use('/api/img', image)
export default routes
