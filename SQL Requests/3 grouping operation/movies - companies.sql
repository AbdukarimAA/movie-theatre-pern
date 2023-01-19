SELECT film_companies.name, COUNT(*) AS fcpm FROM film_companies 
JOIN movies ON film_companies.Id = movies."filmCompanyId"
GROUP BY film_companies.name