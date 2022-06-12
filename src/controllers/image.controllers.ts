import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

const resizeImage = async (filename: string, width: number, height: number) => {
  // check if thumbnails directory exists and create it if not
  //   const thumbnailsDir = path.join(__dirname, '../../public/thumbnails')
  const thumbnailsDir: string = path.resolve(
    __dirname,
    '../../public/thumbnails'
  )

  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir)
  }
  // check if image exists
  const imagePath: string = path.join(
    __dirname,
    '../../public/thumbnails/',
    filename + '.jpg'
  )
  if (fs.existsSync(imagePath)) {
    throw new Error('Image already exists')
  }
  // resize image
  const outputPath: string = path.join(
    __dirname,
    '../../public/thumbnails/',
    `${filename}_${width}_${height}.jpg`
  )
  const filepath: string = path.resolve(
    __dirname,
    '../../public/images/',
    `${filename}.jpg`
  )
  const image = sharp(filepath)
  await image.resize(width, height).toFile(outputPath)
  // return output path
  return outputPath
}
export default resizeImage
