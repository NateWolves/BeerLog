const express = require("express");

const router = express.Router();

const beer = require("../models/beer.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    beer.selectAll(function(data) {
      var hbsObject = {
        beers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/beers", function(req, res) {
    beer.insertOne( req.body.beer_name, req.body.beer_type, req.body.brewery, req.body.notes, (result) => {
      
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/beers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    
    beer.updateOne(
      {
        drank: req.body.drank,
 
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
        
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;