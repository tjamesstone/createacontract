DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(100),
    password TEXT
);

INSERT INTO users (first_name, last_name, email, password)
VALUES ('Tate', 'Stone', 'tate@graw.com', 'password'),
('Elizabeth', 'Stone', 'elizabeth@grow.com', 'password');