const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'..', '/views/index.html'))
});

router.get("/about", (req, res) =>{
    res.sendFile(path.join(__dirname,'..', '/views/about.html'))
})

router.get("/projects", (req, res) =>{
    res.sendFile(path.join(__dirname,'..', '/views/projects.html'))
})

router.get("/contact", (req, res) =>{
    res.sendFile(path.join(__dirname,'..', '/views/contact.html'))
})

module.exports = router;