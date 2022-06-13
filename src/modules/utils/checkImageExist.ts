import fs from 'fs'

const checkImageExist = (imagePath: string): boolean => {
  if (!fs.existsSync(imagePath)) {
    return false
  }
  return true
}
export default checkImageExist
