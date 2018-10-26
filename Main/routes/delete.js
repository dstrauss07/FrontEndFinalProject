"use strict";
let express = require('express'),
router = express.Router(),
repo = require("../models/postRepository");

router.get('/:playerName',(req,res,next)=>{
    let character = repo.getCharByName(req.params.playerName);
    res.render('delete', {
        playerName: character.playerName,
        race: character.race,
        class: character.class,
        id: repo.getPostIndex(req.params.playerName)

});
});

router.post("/", (req,res,next) =>{
    let delChar = {};    
      delChar.id = req.body.delid;
       repo.deleteChar(delChar.id);
       res.redirect('/');

});

module.exports = router;

