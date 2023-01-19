SELECT movies.title, movies.ratings, genres.name  FROM movies, genres
WHERE genres.id = movies."genreId" AND movies.ratings > 4