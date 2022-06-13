import path from 'path'

const getImagePath = async (
  filename: string,
  processed: string,
  width?: number,
  height?: number
): Promise<string> => {
  // if no width or height is provided, return the image
  if (!width && !height) {
    const imagePath: string = path.join(
      __dirname,
      `../../../public/${processed}/`,
      `${filename}.jpg`
    )

    return imagePath
  }
  // if width and height are provided, return the resized image
  const outputPath: string = path.join(
    __dirname,
    `../../../public/${processed}/`,
    `${filename}_${width}_${height}.jpg`
  )
  return outputPath
}

export default getImagePath
