CREATE FUNCTION trigger_movies_limit_insert() RETURNS trigger AS $$ 
BEGIN 
  IF (NEW.limit > 0 and NEW.limit < 20)  
      THEN

      ELSE
         -- генерация исключительной ситуации
         RAISE EXCEPTION 'Ошибка корректности данных';
      END IF;
   RETURN NEW;
END; 
$$ LANGUAGE  plpgsql;

CREATE TRIGGER tr_movies_insert 
BEFORE INSERT ON "movies" FOR EACH ROW 
EXECUTE PROCEDURE trigger_movies_limit_insert();
