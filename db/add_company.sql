INSERT INTO company_info (legal_name, terms_of_service, logo, address, city, state, zipcode, user_id)
VALUES($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;