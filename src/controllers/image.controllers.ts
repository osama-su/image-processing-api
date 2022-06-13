import path from 'path'
import fs from 'fs'
import resize from '../modules/utils/resizeImage'
import getImagePath from '../modules/utils/getImagePath'
import checkThumbnailsDir from '../modules/utils/checkThumbnailsDir'
import checkImageExist from '../modules/utils/checkImageExist'

export const showImage = async (
  filename: string,
  width?: number,
  height?: number
): Promise<string> => {
  // if no width or height is provided, return the image
  if (!width && !height) {
    // get the image path
    const imagePath: string = await getImagePath(filename, 'images')
    // if the image doesn't exist,
    if (!fs.existsSync(imagePath)) {
      throw new Error(`Image ${filename} does not exist.`)
    }
    // return the image path
    return imagePath
  }
  // if width and height are provided, resize the image
  return await resizeImage(filename, width as number, height as number)
}

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  // check if thumbnails directory exists and create it if not
  const thumbnailsDir: string = path.resolve(
    __dirname,
    '../../public/thumbnails'
  )
  checkThumbnailsDir(thumbnailsDir)
  // check if image exists
  const imagePath: string = await getImagePath(
    filename,
    'thumbnails',
    width,
    height
  )
  const outputPath: string = await getImagePath(
    filename,
    'thumbnails',
    width,
    height
  )

  if (!checkImageExist(imagePath)) {
    // resize image

    const filepath: string = await getImagePath(filename, 'images')
    await resize(filepath, width, height, outputPath)
  }
  // return output path
  return outputPath
}
// export default resizeImage
