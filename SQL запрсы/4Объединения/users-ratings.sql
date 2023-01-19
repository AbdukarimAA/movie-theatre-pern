SELECT users.username, ratings.rate FROM ratings 
JOIN users ON users.id = ratings."userId"
WHERE ratings.id = "movieId" OR ratings.rate = '4' OR users.username = '_mov_'