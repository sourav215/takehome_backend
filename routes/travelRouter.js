const express = require('express');
const { addNewDataInDB,getAllDataFromDB } = require('../controller/travelController');
const router = express.Router();


// To get all informations
router.get("/", getAllDataFromDB);

// To insert new data
router.post("/add", addNewDataInDB);

module.exports = router;