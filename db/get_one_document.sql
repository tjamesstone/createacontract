SELECT c.id, c.contract_name, c.user_id, ci.legal_name, ci.terms_of_service, ci.logo, 
ci.address, ci.city, ci.state, ci.zipcode, 
cl.client_name, cl.signatory, f.title, f.description, f.price, t.effective_date, t.contract_length, 
t.autorenew, t.payment_frequency, t.collections_protection, t.chargeback_protection FROM contracts c
JOIN company_info ci ON c.company_id = ci.id
JOIN client_info cl ON c.client_id = cl.id
JOIN features_info f on c.features_id = f.id
JOIN terms_info t on c.terms_id = t.id
WHERE c.id = $1
;
