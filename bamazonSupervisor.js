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
    console.log("Welcome Bamazon Manager #" + connection.threadId);

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
            choices: ["View Products for Sale", "View Low Inventory", "Change Inventory", "Add New Product", "EXIT"]
        }).then(function(choice) {
            switch(choice.prompt) {
                case "View Products for Sale":
                    viewItems()
                    break;
                case "View Low Inventory":
                    viewLowInv()
                    break;
                case "Change Inventory":
                    addInv();
                    break;
                case "Add New Product":
                    addProduct();
                    break;
                case "EXIT":
                    console.log("\nConnection Terminated! Enjoy the rest of your day!");
                    connection.end();
                    break;
            }
        });
    };
    userPrompt ();
}