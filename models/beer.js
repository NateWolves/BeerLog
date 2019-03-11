
// Importing ORM
const orm = require("../config/orm");

// these functions will interact with our database through the ORM
const beer = {
    selectAll: (CB) => {
        orm.selectAll("beers", (res) => {
            CB(res)
        }); 
    },
    selectWhere: (CB) => {
        orm.selectWhere("beers", column, value, (res) =>{
            CB(res)
        });
    },
    insertOne: (name, type, brewery, notes, CB) => {
        orm.insertOne(name, type, brewery, notes, (res) => {
            CB(res);
        });
    },
    updateOne: (cols, condition, CB) => {
        orm.updateOne(cols, condition, (res) => {
          CB(res);
        });
    }
};

module.exports = beer;