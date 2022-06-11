import express from 'express'
import resizeImage from '../../controllers/image.controllers'

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
image.get('/show', (req, res) => {
  res.json({ message: 'show image' })
})
image.get('/resize', async (req, res) => {
  // get filename from querystring
  const filename: string = req.query.filename as string
  // get width and height from querystring
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)

  // resize in image conttroller
  const resizedImage = await resizeImage(filename, width, height)
  // send resized image
  res.sendFile(resizedImage)
})
export default image
