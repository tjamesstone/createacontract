INSERT INTO contracts (contract_name, company_id, client_id, features_id, terms_id, user_id)
VALUES($1, $2, $3, $4, $5, $6)
RETURNING *;