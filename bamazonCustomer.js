require("dotenv").config();

var mysql = require("mysql");

var keys = require("./keys.js");

function Password (password) {
    this.password = password;
}

var pw = new Password(keys.password);

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: pw.password.password,
    database: "bamazon_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryProducts();
});

function queryProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | Dept: " + res[i].department_name + " | Price: $" + res[i].price + " | QTY: " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
        connection.end();
    });
}