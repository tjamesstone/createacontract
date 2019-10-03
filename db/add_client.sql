INSERT INTO client_info (client_name, signatory,  user_id)
VALUES($1, $2, $3)
RETURNING *;