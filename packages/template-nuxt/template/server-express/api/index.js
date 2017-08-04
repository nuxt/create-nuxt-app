
const { Router } = require('express')

const users = require('./users')

const router = Router()

// Add USERS Routes
router.use(users)

module.exports = router
