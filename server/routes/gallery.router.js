const express = require('express');
const router = express.Router();
//use db instead of gallery.data.js file
const pool = require('../modules/pool.js');
//const galleryItems = require('../modules/gallery.data');

// ROUTES

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "images" ORDER BY "id";`;
    pool.query(sqlText)
        .then((result) => {
            console.log('db response:', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error running query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

module.exports = router;