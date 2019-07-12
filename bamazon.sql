-- CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(60) NULL,
    price INT NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Parrot, With 1st Gen LIRI", "Smart Home", 49.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Parrot Speck, With 1st Gen LIRI", "Smart Home", 24.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Flame TV, Works with LIRI", "Television & Accesories", 149.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Flame HD 10 Tablet, Works with LIRI", "Tablets & Accessories", 199.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Spindle, Works with LIRI", "Tablets & Accessories", 99.99, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BamazonRoots AA 1.5 Volt Performance Alkaline Batteries - Pack of 48, Packaging May Vary", "Electronics", 13.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BamazonRoots 12-Piece Colored Kitchen Knife Set", "Home & Kitchen", 15.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon Ding Wi-Fi enabled Video Doorbell, Works with LIRI", "Home & Security", 99.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("All-new Spindle Oracle", "Computers & Accessories", 249.99, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Parrot Feather – Bring LIRI to your own speaker- Black", "Smart Home", 34.99, 1000);

SELECT * FROM products;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Runner6998!';
	