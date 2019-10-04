DROP TABLE IF EXISTS terms_info;

CREATE TABLE terms_info (
    id SERIAL PRIMARY KEY,
    effective_date DATE,
    contract_length INTEGER,
    autorenew VARCHAR(30),
    payment_frequency VARCHAR(30),
    collections_protection VARCHAR(10),
    chargeback_protection VARCHAR(10),
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO terms_info (effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection, user_id)
VALUES ('10/04/2019', 12, 'yes', 'monthly', 'yes', 'yes', 11),
('9/30/2018', 18, 'no', 'quarterly','no', 'yes', 8);

