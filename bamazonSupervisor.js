require("dotenv").config();

var mysql = require("mysql");

var keys = require("./keys.js");

var inquirer = require("inquirer");

const cTable = require('console.table')

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
    console.log("Welcome Bamazon Supervisor #" + connection.threadId);

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
            choices: ["View Product Sales by Department", "Create New Department", "EXIT"]
        }).then(function(choice) {
            switch(choice.prompt) {
                case "View Product Sales by Department":
                    viewSales()
                    break;
                case "Create New Department":
                    createNew()
                    break;
                case "EXIT":
                    console.log("\nConnection Terminated! Enjoy the rest of your day!");
                    connection.end();
                    break;
            }
        });
    };
    userPrompt ();
    function viewSales() {
        var query = "SELECT department_id, departments.department_name, over_head_costs AS Over_Head_Costs , SUM(product_sales) AS Product_Sales FROM departments LEFT JOIN products ON departments.department_name = products.department_name GROUP BY department_id, department_name;"
        connection.query( query, function(err, res) {
            if (err) throw err;
            var deptArr = []
            for (var i = 0; i < res.length; i++) {
                var deptObj = {
                    "item #": i + 1,
                    "Department": res[i].department_name,
                    "Over Head Costs": res[i].Over_Head_Costs,
                    "Product Sales": res[i].Product_Sales,
                    "Total Profit": parseFloat(res[i].Product_Sales) - parseFloat(res[i].Over_Head_Costs)
                };
                deptArr.push(deptObj);
            }
            console.table(deptArr);
            console.log("");
            userPrompt ();
        });
    }
    function createNew () {
        inquirer
            .prompt([{
                name: "newDept",
                type: "input",
                message: "Please enter the name of the new department: "
            },{
                name: "initOHCost",
                type: "input",
                message: "Please set initial over head cost",
            }
        ])
        .then(function(answer) {
            var name = answer.newDept;
            var cost = answer.initOHCost;

            if (isNaN(cost)) {
                console.log("\nINVALID INPUT\nPlease be sure that you've entered the number for initial over head cost.\n")
            }
            console.log ("\nYou have chosen "+name + " and would like to set the initial over head cost to " + cost + "\n");

            inquirer
            .prompt({
                name: "confirmOrder",
                type: "list",
                message: "Please confirm transaction.",
                choices: ["YES", "NO"]
            }).then(function(choice) {
                switch(choice.confirmOrder) {
                    case "YES":
                    updateProduct(name, cost);
                    console.log("\nNew Department Added\n")                         
                    userPrompt();
                        break;

                    case "NO":
                        console.log("\ntransaction cancelled\n");
                        userPrompt();
                        break;
                }
                function updateProduct(name, cost) {
                    connection.query( "INSERT INTO departments (department_name, over_head_costs) VALUES (?, ?)",
                        [name, cost],
                        function(err) {
                            if (err) throw err;
                        }
                    );
                }
                
            });

        });
    }
}