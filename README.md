# Bamazon-node-app

This "Bogus-Amazon" application is a mockup application intended to function like the Real Amazon store, but on a small scale.
in this application you are able to play the role of customer to make purchases, manager to update products and inventory, and Supervisor to oversee the departments and see the flow of total costs, income from sales, and total profit. 

### Friendly Warning

After downloading this application, you will have to setup your own password.

## Installation

in git bash or similar terminal, run:

`npm install`

then:

for Customer side, run:

`node bamazonCustomer.js`

for Manager side, run: 

`node bamazonManager.js`

for Supervisor side, run: 

`node bamazonSupervisor.js`

## Customer

When the Customer side is initiated, the terminal will display current items for sale
The prompt that follows will ask you to make a purchase wher you can assign the following attributes

* Item number of product you'd like to purchase.
* Quantity that you'd like to purchase

The following Prompt will have your review your order and ask if you to confirm your purchase.

```
You have chosen 'item description' and would like to order a quantity of 'item quantity'
Subtotal: $$$
Tax (6%): $$$
Your total: $$$
? Please confirm purchase. (Use arrow keys)
> YES
  NO
```
If you select yes, you will get an order confirmation number, approx ETA on your purchase, and a reminder to become a Bamazon Primus Member

```
ORDER CONFIRMATION #:
Your order will arrive in 3-5 business days.
Bamazon Primus Members get free Two-Day Shipping on over 100 million items.
Sign up for a membership today and get your deliveries sooner along with other countless
Bamazon Primus Membership Benefits including Primus Video and Primus Music!

? What would you like to do? (Use arrow keys)
> Purchase another item
  Exit
```

If you select no, the order is cancelled and then you are asked how you would like to proceed 

```
purchase cancelled

? What would you like to do? (Use arrow keys)
> Choose a different item / change quantity
  Exit
```
In either scenario, Purchase another item or Choose a different item / change quantity will take you back to the starting prompt. EXIT will terminate the application but not before thanking you for your visit.

## Manager

When the Manager side is initiated, the terminal will give you a prompt, asking what you'd like to do

```
? What would you like to do? (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Change Inventory
  Add New Product
  EXIT
```

View Products for sale will generate a list in the terminal of all the current items for sale, their assigned department, item price, and current quantity in stock.

View Low Inventory will generate a similar list, but instead will only show items that have a current stock of 50 or less.

Change Inventory will allow you as the manager to manipulate a current listed item's inventory by adding or subtracting.

```
? What would you like to do? Change Inventory
? Please enter the product item number that you'd like to change the inventory for.
? Please enter the quantity that you would like to add/(include ' - ' ) subtract. 
```

After you will be prompted to confirm your transaction

```
You have chosen 'item description' and would like to update the inventory by a quantity of 'item quantity'

? Please confirm transaction. (Use arrow keys)
> YES
  NO
```

YES Updates the inventory and can be checked by running the 'View Products for Sale' prompt again. NO cancels the transcation. Both will follow with the prompt asking what you'd like to do next.

Add New Product will allow you to manually add a new product for sale. You will be given the following prompts to answer

```
? Please enter the name of the new product: 
? Please choose the department of the new product 
? What is the price of the new product?(ENTER NUMBERS ONLY) $
? What is the initial stock quantity of the new product?(ENTER NUMBERS ONLY)  
```

Following that, you will be asked to confirm, YES updates the list of items and can be checked by running the 'View Products for Sale' prompt again. NO cancels the transcation. Both will follow with the prompt asking what you'd like to do next.

EXIT will terminate the application

## Supervisor

When the Supervisor side is initiated, the terminal will give you a prompt, asking what you'd like to do

```
? What would you like to do? (Use arrow keys)
> View Product Sales by Department
  Create New Department
  EXIT
```

View Product Sales by Department will display all of the currently existing departments in the database. Each department will list their over head cost, product sales, and total profit from the department.

Create New Department will allow you to manually add a new department to the database and initialize the over head cost. You will be given the following prompt.

```
Please enter the name of the new department:  Hello Kitty
? Please set initial over head cost
```

You will be asked to confirm the transaction. YES will add the department into the database and can be seen if you run 'View Product Sales by Department' again. NO cancels the transaction. Both follow with the prompt asking what you'd like to do.

EXIT terminates the application.


## Built With

* [MySql](https://www.mysql.com/) 
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Authors

* **Jeff Froehlich** - *Initial work* - [PurpleBooth](https://github.com/jsf5077)

