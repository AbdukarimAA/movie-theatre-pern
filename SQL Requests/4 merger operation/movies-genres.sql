SELECT movies.title, movies.director, genres.name FROM movies
JOIN genres ON movies."genreId" = genres.id
WHERE movies.director = 'George Lucas' OR genres.name = 'Action'