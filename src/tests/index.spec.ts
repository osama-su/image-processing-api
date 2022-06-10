import supertest from 'supertest'
import fs from 'fs'
import app from '../index'

const request = supertest(app)

describe('Test endpoint respones', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api')
    expect(response.status).toBe(200)
  })
  it('gets the api/img/show endpoint', async () => {
    const response = await request.get('/api/img/show?filename=test')
    expect(response.status).toBe(200)
  })
  it('gets the api/img/resize endpoint', async () => {
    const response = await request.get(
      '/api/img/resize?filename=test&width=200&height=200'
    )
    expect(response.status).toBe(200)
  })
  it('should return 404 for invalid endpoint', async () => {
    const response = await request.get('/api/foo')
    expect(response.status).toBe(404)
  })
})
describe('Test if image exists', () => {
  it('should return true if image exists', async () => {
    expect(fs.existsSync('src/public/images/test.jpg')).toBe(true)
  })
  it('should return false if image does not exist', async () => {
    expect(fs.existsSync('src/public/images/iam-not-there.jpg')).toBe(false)
  })
})
