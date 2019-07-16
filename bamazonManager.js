require("dotenv").config();

var mysql = require("mysql");

var keys = require("./keys.js");

var inquirer = require("inquirer");

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

    console.log("Welcome Bamazon Manager!");
    

    var compileList;
    var number = 2;

    
    

    function logInMessage() {
        compileList = setInterval(decrement, 1000);
    }

    function decrement() {

        number--;
        if (number === 0) {
            stop();
            start();
          }
    } 

    function stop() {
        clearInterval(compileList);
      }

    logInMessage();
});

function start() {
        function userPrompt () {
            inquirer
            .prompt({
                name: "prompt",
                type: "list",
                message: "What would you like to do?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "EXIT"]
            }).then(function(choice) {
                switch(choice.prompt) {
                    case "View Products for Sale":
                        viewItems()
                        break;
                    case "View Low Inventory":
                        viewLowInv()
                        break;
                    case "Add to Inventory":
                        addInv();
                        break;
                    case "Add New Product":
                        console.log("add new product")
                        break;
                    case "EXIT":
                        console.log(" ");
                        console.log("Connection Terminated! Enjoy the rest of your day!");
                        connection.end();
                        break;
                }
            });
        };
        userPrompt ();
        function viewItems() {
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                console.log(" ");
                console.log(" ");
                for (var i = 0; i < res.length; i++) {
                    console.log(" || " + (i + 1) + " || " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: $" + res[i].price + " || QTY: " + res[i].stock_quantity);
                    console.log("------------------------------------------------------------------------------------------------------------------------");
                    console.log("------------------------------------------------------------------------------------------------------------------------");
                

                }
                userPrompt ()
            });
        }
        function viewLowInv() {
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].stock_quantity <= 50) {
                    console.log(" || " + (i + 1) + " || " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: $" + res[i].price + " || QTY: " + res[i].stock_quantity);
                    console.log("------------------------------------------------------------------------------------------------------------------------");
                    console.log("------------------------------------------------------------------------------------------------------------------------");
                    }
                }
                userPrompt ()
            });
        }
    
        function addInv() {
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
    
                inquirer
                .prompt([{
                    name: "whichItem",
                    type: "input",
                    message: "Please enter the product item number that you'd like to add inventory to."
                }, {
                    name:"howMany",
                    type: "input",
                    message: "Please enter the quantity that you would like to add."
                    }
                ])
                .then(function(answer) {
                    var item = answer.whichItem - 1;
                    var invItem = item + 1;

                    if (!item || invItem > res.length || invItem <= 0) {
                        console.log(" ");
                        console.log("INVALID INPUT")
                        console.log("Please be sure that you've entered the number that matches your item selection.")
                        console.log(" ");
                        addInv(); 

                    } else {
                        var qty = parseInt(answer.howMany);
                        var itemInvNum = parseInt(res[item].stock_quantity);
                    if (Number.isInteger(+qty)) {
                        var newQty = itemInvNum + qty;
                        var purchasedItemID = res[item].item_id;
                        if (item <= res.length) {
                            console.log(" ");
                            console.log ("You have chosen "+res[item].product_name + " and would like to update the inventory by a quantity of " + qty);

                            inquirer
                            .prompt({
                                name: "confirmOrder",
                                type: "list",
                                message: "Please confirm transaction.",
                                choices: ["YES", "NO"]
                            }).then(function(choice) {
                                switch(choice.confirmOrder) {
                                    case "YES":
                                                                
                                    updateProduct(newQty, purchasedItemID);
                                    userPrompt();
                                        break;

                                    case "NO":
                                        console.log(" ");
                                        console.log("transaction cancelled");
                                        console.log("");
                                        userPrompt();
                                        break;
                                }
                                
                            });
                        } else {
                            console.log(" ");
                            console.log("INVALID INPUT")
                            console.log("Please be sure that you've entered the number that matches your item selection.")
                            console.log(" ");
                            addInv();
                        }
                    } else {
                        console.log(" ");
                        console.log("INVAID INPUT.")
                        console.log("Please be sure that you've entered a number for quantity.")
                        console.log(" ");
                        userPrompt(); 
                    } 
                    function updateProduct(newQty, invItem) {
                        connection.query( "UPDATE products SET stock_quantity=? WHERE item_id=?",
                            [newQty, invItem],
                            function(err) {
                                if (err) throw err;
                            }
                        );
                    }
                    }
                });
            });
        }
 
}
