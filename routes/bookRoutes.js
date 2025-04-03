// impoprto express
const express = require("express")
const router  = express.Router()
// controllers
const bookController = require("../controllers/bookControllers")
// index
router.get('/', bookController.index)
// show
router.get('/:id', bookController.show );
//store
router.post('/', bookController.store );
//update 
router.put('/:id', bookController.update );
//modify
router.patch('/:id', bookController.modify );
//delete
router.delete('/:id', bookController.destroy );

module.exports = router