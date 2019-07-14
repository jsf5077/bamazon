require("dotenv").config();

var mysql = require("mysql");

var keys = require("./keys.js");

var inquirer = require("inquirer");

function Password (password) {
    this.password = password;
}

var pw = new Password(keys.password);

var listSize = 0;
var itemQty = 0;

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

    console.log("dP   dP   dP          dP                                            dP            ");
    console.log("88   88   88          88                                            88            ");
    console.log("88  .8P  .8P .d8888b. 88 .d8888b. .d8888b. 88d8b.d8b. .d8888b.    d8888P .d8888b. ");
    console.log("88  d8'  d8' 88ooood8 88 88'  ``` 88'  `88 88'`88'`88 88ooood8      88   88'  `88 ");
    console.log("88.d8P8.d8P  88.  ... 88 88.  ... 88.  .88 88  88  88 88.  ...      88   88.  .88 ");
    console.log("8888' Y88'   `88888P' dP `88888P' `88888P' dP  dP  dP `88888P'      dP   `88888P' ");
    console.log(" ")
    console.log("██████╗  █████╗ ███╗   ███╗ █████╗ ███████╗ ██████╗ ███╗   ██╗");
    console.log("██╔══██╗██╔══██╗████╗ ████║██╔══██╗╚══███╔╝██╔═══██╗████╗  ██║");
    console.log("██████╔╝███████║██╔████╔██║███████║  ███╔╝ ██║   ██║██╔██╗ ██║");
    console.log("██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║ ███╔╝  ██║   ██║██║╚██╗██║");
    console.log("██████╔╝██║  ██║██║ ╚═╝ ██║██║  ██║███████╗╚██████╔╝██║ ╚████║");
    console.log("╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝");
    console.log("");
    console.log("Please wait while we grab our inventory list for you!");
    console.log("");

    var compileList;
    var number = 4;

    
    

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
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | Dept: " + res[i].department_name + " | Price: $" + res[i].price + " | QTY: " + res[i].stock_quantity);
            console.log("-----------------------------------");
        }

        inquirer
      .prompt([{
                name: "whichItem",
                type: "input",
                message: "What is the id number of the item you would like to purchase?"
            }, {
                name:"howMany",
                type: "input",
                message: "Please enter the quantity that you would like to purchase."
            }
        ])
        .then(function(answer) {
            for (var i = 0; i > res.length; i++) {
                if (answer.whichItem === res[i].item_id) {
                    console.log ("You have chosen "+res[i].product_name);
                    if (answer.howMany > res[i].stock_quantity) {
                        console.log ("insufficient quantity!")
                        start();
                    }
                    console.log("Thank you for your purchase! Your total comes to $"+(answer.howMany * res[i].price));
                    connection.end();
                }
            }

            
        
        });
    });
}