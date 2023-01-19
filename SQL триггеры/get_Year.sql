CREATE FUNCTION GetYear (integer) RETURNS text AS $$
DECLARE res text;
BEGIN
	IF $1 BETWEEN 1900 AND 1970 THEN
		SELECT 'Ретро-Фильм' INTO res;
	ELSE IF $1 BETWEEN 1970 AND 1990 THEN 
		SELECT 'Классический фильм' INTO res;
	ELSE IF $1 BETWEEN 1990 AND 2000 THEN
		SELECT 'С внедрением новых технологий' INTO res;
	ELSE IF $1 BETWEEN 2000 AND 2010 THEN
		SELECT 'Свежие фильмы' INTO res;
	ELSE IF $1 BETWEEN 2010 AND 2020 THEN
		SELECT 'Недавняя новинка' INTO res;
	ELSE SELECT 'Новинка' INTO res;
	END IF; END IF; END IF; END IF; END IF;
	RETURN res;
END;
$$ LANGUAGE plpgsql