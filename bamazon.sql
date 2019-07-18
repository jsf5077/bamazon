-- DROP DATABASE IF EXISTS bamazon_DB;

-- CREATE DATABASE bamazon_DB;

USE bamazon_DB;

SELECT department_id, departments.department_name, over_head_costs AS Over_Head_Costs , SUM(product_sales) AS Product_Sales
FROM departments
RIGHT JOIN products ON departments.department_name = products.department_name
GROUP BY department_id, departments.department_name;

-- CREATE TABLE products (
-- 	item_id INT NOT NULL AUTO_INCREMENT,
--     product_name VARCHAR(100) NULL,
--     department_name VARCHAR(60) NULL,
--     price DECIMAL(10, 2) NULL,
--     stock_quantity INT NULL,
--     product_sales DECIMAL(10, 2) NULL,
--     PRIMARY KEY (item_id) 
-- );

-- CREATE TABLE departments (
-- 	department_id INT NOT NULL AUTO_INCREMENT,
--     department_name VARCHAR(60) NULL,
--     over_head_costs DECIMAL(10, 2) NULL,
--     PRIMARY KEY (department_id) 
-- );

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Smart Home", 1000);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Television & Accesories", 2000);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Tablets & Accessories", 1500);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Electronics", 5000);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Home & Kitchen", 2500);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Home & Security", 5500);

-- INSERT INTO departments (department_name, over_head_costs)
-- VALUES ("Computers & Accessories", 3500);


-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Parrot, With 1st Gen LIRI", "Smart Home", 49.99, 500, 1000);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Parrot Speck, With 1st Gen LIRI", "Smart Home", 24.99, 500, 1000);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Flame TV, Works with LIRI", "Television & Accesories", 149.99, 150, 2500);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Flame HD 10 Tablet, Works with LIRI", "Tablets & Accessories", 199.99, 200, 750);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Spindle, Works with LIRI", "Tablets & Accessories", 99.99, 300, 950);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("BamazonRoots AA 1.5 Volt Alkaline Batteries - Pack of 48", "Electronics", 13.99, 500, 5500);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("BamazonRoots 12-Piece Colored Kitchen Knife Set", "Home & Kitchen", 15.99, 200, 3000);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Ding Wi-Fi enabled Video Doorbell, Works with LIRI", "Home & Security", 99.99, 200, 6000);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("All-new Spindle Oracle", "Computers & Accessories", 249.99, 350, 4000);

-- INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
-- VALUES ("Bamazon Parrot Feather – Bring LIRI to your own speaker- Black", "Smart Home", 34.99, 1000, 500);

-- UPDATE products 
-- SET 
--     item_id = 5
-- WHERE
--     product_name = 'Bamazon Spindle, Works with LIRI';

-- DELETE FROM products 

-- WHERE
--     item_id = 5;

--     Bamazon Spindle, Works with LIRI
    
-- SELECT * FROM products;
SELECT * FROM departments;

SELECT department_id, departments.department_name, over_head_costs AS Over_Head_Costs , SUM(product_sales) AS Product_Sales
FROM departments
LEFT JOIN products ON departments.department_name = products.department_name
GROUP BY department_id, department_name;

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'enter password here';
	