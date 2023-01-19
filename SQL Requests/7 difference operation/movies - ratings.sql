SELECT movies.id, movies.title, ratings.id, ratings.rate, ratings."userId" FROM movies 
JOIN ratings ON movies.id = ratings."movieId"
WHERE ratings.rate = '4' or ratings.rate = '5' AND NOT EXISTS (SELECT * FROM ratings as rt
										WHERE rt."movieId" = movies.id AND rt.rate = '2' or rt.rate = '3' )