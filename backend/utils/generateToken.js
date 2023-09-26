import jwt from 'jsonwebtoken'

// generate token that expires in 12 hours
const generateToken = (id) => {
  return jwt.sign({ id }, 'MIIJKAIBAAKCAgEAlUAvcSUJqqMn7PmWFd/EB4ZLh5f1Yl3SaR', { expiresIn: '12h' })
}

export default generateToken
