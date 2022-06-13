import sharp from 'sharp'

const resizeImage = async (
  filepath: string,
  width: number,
  height: number,
  outputPath: string
) => {
  const image = sharp(filepath)
  await image.resize(width, height).toFile(outputPath)
}

export default resizeImage
