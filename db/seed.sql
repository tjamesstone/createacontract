DROP TABLE IF EXISTS contracts;
DROP TABLE IF EXISTS client_info;
DROP TABLE IF EXISTS terms_info;
DROP TABLE IF EXISTS features_info;
DROP TABLE IF EXISTS company_info;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(100),
    password TEXT
);



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

CREATE TABLE features_info (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    price INTEGER,
    user_id INTEGER REFERENCES users(id)
);


CREATE TABLE company_info (
    id SERIAL PRIMARY KEY,
    legal_name VARCHAR(100),
    terms_of_service TEXT,
    logo TEXT,
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(40),
    zipcode INTEGER,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE client_info (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(100),
    signatory TEXT,
    user_id INTEGER REFERENCES users(id)
);
CREATE TABLE contracts(
    id SERIAL PRIMARY KEY,
    contract_name VARCHAR(100),
    company_id INTEGER REFERENCES company_info(id),
    client_id INTEGER REFERENCES client_info(id),
    features_id INTEGER REFERENCES features_info(id),
    terms_id INTEGER REFERENCES terms_info(id),
    user_id INTEGER REFERENCES users(id)
);  






