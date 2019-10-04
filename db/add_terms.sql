INSERT INTO terms_info (effective_date, contract_length, autorenew, payment_frequency, collections_protection, chargeback_protection, user_id)
VALUES($1, $2, $3, $4, $5, $6, $7)
RETURNING *;