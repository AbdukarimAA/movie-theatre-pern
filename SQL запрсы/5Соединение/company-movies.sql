SELECT movies.title, movies.limit, film_companies.name  FROM movies, film_companies
WHERE film_companies.id = movies."filmCompanyId" AND movies.limit > 15 and movies.limit < 18 