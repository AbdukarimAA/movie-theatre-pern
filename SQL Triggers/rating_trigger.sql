CREATE FUNCTION rating_trigger() RETURNS trigger AS $$ 
BEGIN
  IF CheckRating(NEW."userId", NEW."movieId")  
      THEN
        UPDATE movies SET ratings = (select Round(avg(rate),1) from ratings
										where ratings."movieId" = NEW."movieId")
						 WHERE movies.id = NEW."movieId";
      ELSE
         RAISE EXCEPTION 'Ошибка корректности данных';
      END IF;
   RETURN NEW;
END; 

$$ LANGUAGE  plpgsql;

CREATE TRIGGER tr_results_insert 
AFTER INSERT ON "ratings" FOR EACH ROW 
EXECUTE PROCEDURE rating_trigger();


