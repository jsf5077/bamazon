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

When the customer side is initiated, the terminal will display current items for sale
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

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [MySql](https://www.mysql.com/) 
* [MySQL Workbench](https://www.mysql.com/products/workbench/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
