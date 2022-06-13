import { Request, Response, NextFunction } from 'express'
import { query, validationResult } from 'express-validator'
import getFilesNames from '../modules/utils/readFiles'

const images = getFilesNames()

export const imageExist = () => [
  query('filename')
    .exists()
    .withMessage('You must provide image filename.')
    .isIn(images)
    .withMessage(
      'You must provide image filename that is in images or thumbnails.'
    ),
]

// Validate image exist
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const imageValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  while (!errors.isEmpty()) {
    return res.status(404).json({ errors: errors.array() })
  }
  next()
}
