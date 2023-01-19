SELECT users.email, comments.comment, COUNT(*) AS com FROM users 
JOIN comments ON users.Id = comments."userId"
GROUP BY users.email, comments.comment