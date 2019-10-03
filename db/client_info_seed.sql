DROP TABLE IF EXISTS client_info;

CREATE TABLE client_info (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(60),
    signatory TEXT,
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO client_info (client_name, signatory, user_id)
VALUES ('MasterCard', 'Jane Smith', '11'),
('Visa', 'John Smith', '11');