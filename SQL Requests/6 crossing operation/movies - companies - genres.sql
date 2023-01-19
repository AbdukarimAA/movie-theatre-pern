SELECT movies.title FROM movies 
JOIN film_companies ON film_companies.id = movies."filmCompanyId"
JOIN genres ON genres.id = movies."genreId"
WHERE film_companies.name = 'Lucasfilm' AND genres.name = 'Fantasy'