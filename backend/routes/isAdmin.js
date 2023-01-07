const express =require('express');
const router =express.Router();
const isAdminController =require('../controllers/isAdminController')
router.get('/',isAdminController)

module.exports = router;