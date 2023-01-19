SELECT users.id, users.email, ratings.rate FROM users
JOIN ratings ON users.id = ratings."userId"
WHERE ratings.rate = 5 
AND EXISTS (SELECT * FROM ratings as rt WHERE rt."userId" = ratings."userId" AND rt.rate = 4)