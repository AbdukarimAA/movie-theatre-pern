SELECT movies.title, movies.ratings, genres.name, genres.id  FROM movies, genres
WHERE genres.id = movies."genreId" AND movies."genreId" != '6'