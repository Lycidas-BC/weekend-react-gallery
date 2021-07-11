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
    const id = req.params.id;
    console.log('PUT', id);

    if(id && id !== ""){
    const sqlText = `
        UPDATE "images"
        SET "likes" = ("likes" + 1)
        WHERE "id" = $1;
    `;
    
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Updated likes column in table images where id =`, id);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(500).send('no id');
    }
}); // END PUT Route



module.exports = router;