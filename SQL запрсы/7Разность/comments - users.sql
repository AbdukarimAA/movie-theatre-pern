SELECT users.id, users.email, comments.comment FROM users
JOIN comments ON users.id = comments."userId"
WHERE LENGTH(comments.comment) > '21' 
AND NOT EXISTS (SELECT * FROM comments as com WHERE com."userId" = comments."userId" AND LENGTH(comments.comment) < '20')