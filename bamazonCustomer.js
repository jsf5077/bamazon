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
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(" || " + (i + 1) + " || " + res[i].product_name + " || Dept: " + res[i].department_name + " || Price: $" + res[i].price + " || QTY: " + res[i].stock_quantity);
            console.log("------------------------------------------------------------------------------------------------------------------------");
            console.log("------------------------------------------------------------------------------------------------------------------------");
        }
        function pickItem () {
                inquirer
        .prompt([{
                    name: "whichItem",
                    type: "input",
                    message: "What is the item number of the product you would like to purchase?"
                }, {
                    name:"howMany",
                    type: "input",
                    message: "Please enter the quantity that you would like to purchase."
                }
            ])
            .then(function(answer) {

                var item = answer.whichItem - 1;
                var invItem = item + 1;

                function userPrompt () {
                    inquirer
                    .prompt({
                        name: "prompt",
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["Choose a different item / change quantity", "Exit"]
                    }).then(function(choice) {
                        switch(choice.prompt) {
                            case "Choose a different item / change quantity":
                                pickItem();
                                break;
                            case "Exit":
                                console.log(" ");
                                console.log("Thank you for choosing Bamazon! We look forward to your next visit!");
                                connection.end();
                                break;
                            }
                        });
                    };

                if (!item || invItem > res.length || invItem <= 0) {
                    console.log(" ");
                    console.log("We're sorry, but we are unable to recognize the item you've selected.")
                    console.log("Please be sure that you've entered the number that matches your item selection.")
                    console.log(" ");
                    userPrompt(); 

                } else {
                    var qty = answer.howMany;
                if (Number.isInteger(+qty)) {
                    var newQty = res[item].stock_quantity - qty;
                    var purchasedItemID = res[item].item_id;
                    if (item <= res.length) {
                        console.log(" ");
                        console.log ("You have chosen "+res[item].product_name + " and would like to order a quantity of " + qty);
                        if (qty > res[item].stock_quantity) {
                            console.log(" ");
                            console.log("We're sorry, but we are unable to complete your transaction")
                            console.log("The requested quantity is more than what is available in inventory")
                            console.log("");
                            userPrompt();
                        } else
                        var subTotal = res[item].price * qty;
                        var tax = subTotal * 0.06;
                        var total = subTotal + tax;
                        console.log( "Subtotal: $" + subTotal)
                        console.log( "Tax (6%): $" + tax)
                        console.log( "Your total: $" + total)
                        inquirer
                        .prompt({
                            name: "confirmOrder",
                            type: "list",
                            message: "Please confirm purchase.",
                            choices: ["YES", "NO"]
                        }).then(function(choice) {
                            switch(choice.confirmOrder) {
                                case "YES":
                                console.log("");
                                console.log("purchased confirmed");
                                console.log("");
                                console.log("ORDER CONFIRMATION #: " + connection.threadId + "BAM" + subTotal + "JSF" + item + "uPENN");
                                console.log("");
                                console.log("Your order will arrive in 3-5 business days.");
                                console.log("");
                                console.log("Bamazon Primus Members get free Two-Day Shipping on over 100 million items.");
                                console.log("Sign up for a membership today and get your deliveries sooner along with other countless");
                                console.log("Bamazon Primus Membership Benefits including Primus Video and Primus Music!");
                                console.log("");

                                
                                updateProduct(newQty, purchasedItemID);
                                afterPurchase();
                                
                                break;

                                case "NO":
                                    console.log(" ");
                                    console.log("purchased cancelled");
                                    console.log("");
                                    userPrompt();

                                break;
                            }
                            
                        })
                    } else {
                        console.log(" ");
                        console.log("Sorry. We were unable to locate the item listing you were looking for.");
                        console.log(" ");
                        userPrompt();
                    }
                } else {
                    console.log(" ");
                    console.log("We're sorry, but we are unable to recognize the quantity you'd like to order.")
                    console.log("Please be sure that you've entered a number.")
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
        
                function afterPurchase () {

                    inquirer
                    .prompt({
                        name: "prompt",
                        type: "list",
                        message: "What would you like to do?",
                        choices: ["Purchase another item", "Exit"]
                    }).then(function(choice) {
                        switch(choice.prompt) {
                            case "Purchase another item":
                                start();
                              break;
                            case "Exit":
                                console.log(" ");
                                console.log("Thank you for choosing Bamazon! We look forward to your next visit!");
                                connection.end();
                              break;
                          }
                        
                    });
                };  
                }
                   
            });
        }
        pickItem();     
    });
    
}
