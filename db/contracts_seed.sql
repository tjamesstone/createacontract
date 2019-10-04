DROP TABLE IF EXISTS contracts;

CREATE TABLE contracts(
    id SERIAL PRIMARY KEY,
    contract_name VARCHAR(20),
    company_id INTEGER REFERENCES company_info(id),
    client_id INTEGER REFERENCES client_info(id),
    features_id INTEGER REFERENCES features_info(id),
    terms_id INTEGER REFERENCES terms_info(id),
    user_id INTEGER REFERENCES users(id)
);  

INSERT INTO contracts (contract_name, company_id, client_id, features_id, terms_id, user_id)
VALUES ('First Contract', 1, 2, 1, 2, 11);