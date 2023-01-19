SELECT users.email, ratings.rate FROM users, ratings
WHERE users.id = ratings."userId"