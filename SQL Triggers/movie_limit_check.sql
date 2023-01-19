CREATE FUNCTION CheckLimit (integer) RETURNS text AS $$
DECLARE res text;
BEGIN 
   IF $1 between 16 and 18 THEN 
   		SELECT 'Разрешено к просмотру подросткам от 16 лет' INTO res;
   ELSE IF $1 > 18 THEN 
   		SELECT 'Разрешено к просмотру людям от 20 лет' INTO res;
   ELSE IF $1 between 12 and 16 THEN 
   		SELECT 'Разрешено к просмотру подросткам от 12 лет' INTO res;
   ELSE IF $1 between 6 and 12 THEN 
   		SELECT 'Разрешено к просмотру детям от 6 лет' INTO res;
   ELSE IF $1 > 0 THEN 
   		SELECT 'Разрешено к просмотру всем возрастам'  INTO res;
   ELSE 
   		RAISE EXCEPTION 'Ошибка корректности данных';
   END IF; END IF; END IF; END IF; END IF;
   RETURN res;
END; 
$$ LANGUAGE  plpgsql;