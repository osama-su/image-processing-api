import fs from 'fs'

const checkThumbnailsDir = (thumbnailsDir: string): boolean => {
  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir)
  }
  return true
}
export default checkThumbnailsDir
