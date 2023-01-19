SELECT users.email, comments.comment, users.id, comments.id FROM comments
JOIN users ON users.id = comments."userId"
WHERE users.username = '%karim%' or users.email like ('%karim%')