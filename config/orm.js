const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };
  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };
  


const orm = {
    selectAll: function(table, CB){
        let queryString = "SELECT * FROM "+ table +";"
        connection.query(queryString, (err,result) => {
            if (err) { throw err; }
            CB(result);
        });
    },
    selectWhere: function(table, column, value) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [table, column, value], (err, result) => {
            if (err) throw err;
            CB(result);
          });
    },
    insertOne: function(name, type, brewery, notes, CB){
        let queryString = "INSERT INTO beers(beer_name, beer_type, brewery, notes) VALUES (?,?,?,?)"

        connection.query(queryString, [name, type, brewery, notes], (err, result) => {
            if (err) {
                throw err;
            };
            CB(result);
        });
    },
    updateOne: function(cols, condition, CB){
        let queryString = "UPDATE beers";
        queryString += " SET ";
        queryString += objToSql(cols);
        queryString += " WHERE "
        queryString += condition + ";";
        console.log(queryString);
        connection.query(queryString, (err, result)=> {
            if (err) {throw err;}
            CB(result);
        }); 
    }
};

module.exports = orm;