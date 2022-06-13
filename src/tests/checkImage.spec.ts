import { unlinkSync } from 'fs'
import { resizeImage } from '../controllers/image.controllers'
import checkImageExist from '../modules/utils/checkImageExist'
import getImagePath from '../modules/utils/getImagePath'

describe('Test if image exist', () => {
  it('should return true when image exists', async () => {
    const imagePath = await getImagePath('test', 'thumbnails', 100, 100)

    if (checkImageExist(imagePath)) {
      unlinkSync(imagePath)
    }
    await resizeImage('test', 100, 100)
    expect(checkImageExist(imagePath)).toBe(true)
  })
})
