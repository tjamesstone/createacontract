INSERT INTO features_info (title, description, price,  user_id)
VALUES($1, $2, $3, $4)
RETURNING *;