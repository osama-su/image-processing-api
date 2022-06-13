import fs from 'fs'
import path from 'path'

const getImagesNames = () => {
  const imagesPath: string = path.join(__dirname, `../../../public/images/`)
  const files = fs.readdirSync(imagesPath)
  const arr: string[] = []
  files.forEach((file) => {
    arr.push(path.basename(imagesPath + file, '.jpg'))
  })
  return arr
}

export default getImagesNames
