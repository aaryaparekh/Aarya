var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/../public/html/home.html'))
    console.log(__dirname+'/../public/html/home.html')
})

module.exports = router