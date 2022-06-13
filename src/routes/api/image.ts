import express from 'express'
import { resizeImage, showImage } from '../../controllers/image.controllers'

const image = express.Router()
image.get('/', (req, res) => {
  res.json({
    message: 'add your image name with width and height as a query params.',
    examples: {
      show: '/api/img/show?filename=image&width=100&height=100',
      resize: '/api/img/resize?filename=image&width=100&height=100',
    },
    note: 'the image must be in the public/images directory.',
  })
})
image.get('/show', async (req, res) => {
  // get the filename from the query params
  const filename: string = req.query.filename as string
  // get the width and height from the query params
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  // show the image
  try {
    const image = await showImage(filename, width, height)
    res.sendFile(image)
  } catch (e) {
    if (e instanceof Error) {
      res
        .status(404)
        .send(
          e.message +
            '\n\n' +
            'add your image name with width and height as a query params.'
        )
    }
  }
})
image.get('/resize', async (req, res) => {
  // get filename from querystring
  const filename: string = req.query.filename as string
  // get width and height from querystring
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)

  try {
    // resize in image conttroller
    const resizedImage = await resizeImage(filename, width, height)
    // send resized image
    res.sendFile(resizedImage)
  } catch (e) {
    if (e instanceof Error) {
      res
        .status(404)
        .send(
          e.message +
            '\n\n' +
            'add your image name with width and height as a query params.'
        )
    }
  }
})
export default image
