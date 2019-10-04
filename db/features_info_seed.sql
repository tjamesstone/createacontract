DROP TABLE IF EXISTS features_info;

CREATE TABLE features_info (
    id SERIAL PRIMARY KEY,
    title VARCHAR(60),
    description TEXT,
    price INTEGER,
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO features_info (title, description, price, user_id)
VALUES ('Business Intelligence', 'We will provide business intelligence and data tracking', 600, 11),
('Accounting Services', 'Tax, AP, AR, and Auditing', 400, 8);

