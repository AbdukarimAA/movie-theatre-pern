CREATE FUNCTION CheckRating(integer, integer) RETURNS BOOLEAN AS $$
BEGIN
      RETURN EXISTS (SELECT * FROM ratings
					JOIN users ON users.id = ratings."userId"
					JOIN movies ON movies.id = ratings."movieId"
					WHERE users.id = $1 AND movies.id = $2);
END;
$$ LANGUAGE plpgsql;