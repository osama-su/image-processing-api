import supertest from 'supertest'
import fs from 'fs'
import app from '../index'
import path from 'path'

const request = supertest(app)

describe('Test endpoint respones', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/img')
    expect(response.status).toBe(200)
  })
  it('gets the api/img/show endpoint', async () => {
    const response = await request.get('/api/img/show?filename=test')
    expect(response.status).toBe(200)
  })
  it('should return a 404 error if no params passed to api/img/show', async () => {
    const response = await request.get('/api/img/show')
    expect(response.status).toBe(404)
  })

  it('gets the api/img/resize endpoint', async () => {
    const response = await request.get(
      '/api/img/resize?filename=test&width=200&height=200'
    )
    expect(response.status).toBe(200)
  })
  it('should return a 404 error if no params passed to api/img/resize', async () => {
    const response = await request.get('/api/img/resize')
    expect(response.status).toBe(404)
  })
  it('should return 404 for invalid endpoint', async () => {
    const response = await request.get('/api/foo')
    expect(response.status).toBe(404)
  })
})
describe('Test if image exists', () => {
  it('should return true if image exists', async () => {
    expect(
      fs.existsSync(path.join(__dirname, '../../public/images', `test.jpg`))
    ).toBe(true)
  })
  it('should return false if image does not exist', async () => {
    expect(
      fs.existsSync(
        path.join(__dirname, '../../public/images', `I'm-not-there.jpg`)
      )
    ).toBe(false)
  })
})
