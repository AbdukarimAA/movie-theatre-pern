SELECT email from users
JOIN comments ON users.id = comments."userId"
WHERE comments.comment like '%like%' AND EXISTS (SELECT * FROM comments as com WHERE com."userId" = comments."userId" AND com.comment like '%gonna%')