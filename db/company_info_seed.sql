DROP TABLE IF EXISTS company_info;

CREATE TABLE company_info (
    id SERIAL PRIMARY KEY,
    legal_name VARCHAR(60),
    terms_of_service TEXT,
    logo TEXT,
    address VARCHAR(70),
    city VARCHAR(50),
    state VARCHAR(25),
    zipcode INTEGER,
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO company_info (legal_name, terms_of_service, logo, address, city, state, zipcode, user_id)
VALUES ('Grow, Inc.', 'https://www.grow.com/company/privacy-and-security', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuSaPCTvn0irPIPWqPlrc91ry6nwfcjStzKxR3ZZZpq56o8ZjsyQ', '4100 North Chapel Ridge Road #300', 'Lehi', 'Utah', 84043, 8),
('Cats LLC', 'www.cats.com/termsofservice', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fmdK6W7rSjqEk87xnxY2HodgwIV90j2Qtq8SVx059PqQw5nOFg', '123 Cool St.', 'Kamas', 'Utah', 84098, 11);


