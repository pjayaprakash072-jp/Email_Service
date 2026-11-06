const router = require('express').Router();
const {
    welcomeEmail,
    forgotPasswordEmail,
    verificationEmail
} = require('../controllers/emailController');
router.post('/welcome', welcomeEmail);
router.post('/forgot-pass',forgotPasswordEmail);
router.post('/verify-email',verificationEmail);

module.exports = router;