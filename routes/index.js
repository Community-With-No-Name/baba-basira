var express = require('express');
var router = express.Router();
var AddController = require("../controllers/AddController")
router.get('/', (req, res)=>AddController.getUsers(req,res))
router.get('/about', (req, res)=>AddController.getAbout(req,res))

module.exports = router;
