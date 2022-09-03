-- 1.
CREATE TABLE ORDERS (
    order_id serial NOT NULL, 
    person_id INT, 
    product_name VARCHAR(100), 
    product_price INT, 
    quantity INT,
    PRIMARY KEY(order_id),
    CONSTRAINT fk_orders
        FOREIGN KEY(person_id)
            REFERENCES PERSON(id)
            ON DELETE SET NULL
);


-- 2.
INSERT INTO ORDERS (person_id, product_name, product_price, quantity)
VALUES
(1, 'banana', 31, 4),
(1, 'apple', 18, 7),
(2, 'pizza', 44, 1),
(4, 'juice', 12, 2),
(4, 'vodka', 38, 2);


-- 3.
SELECT * FROM ORDERS;


-- 4.
SELECT SUM(QUANTITY) FROM ORDERS;


-- 5.
SELECT 
    quantity AS Quantity, 
    product_price AS Price, 
    SUM(quantity * product_price) AS Total
FROM ORDERS
GROUP BY GROUPING SETS((quantity, product_price), ());

SELECT
    SUM(quantity * product_price) AS Total
FROM
    Orders;


-- 6.
SELECT
    person_id, SUM(quantity * product_price) AS Total
FROM
    Orders
GROUP BY person_id;