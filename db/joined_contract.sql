SELECT * FROM contracts con
JOIN company_info com ON com.id = con.company_id
JOIN client_info cl ON cl.id = con.client_id
JOIN features_info f ON f.id = con.features_id
JOIN terms_info t ON t.id = con.terms_id
;