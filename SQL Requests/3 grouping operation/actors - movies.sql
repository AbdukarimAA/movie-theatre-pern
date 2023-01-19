SELECT actors.name, COUNT(*) AS act FROM actors
JOIN type_movie_infos ON actors.id = type_movie_infos."actorId"
GROUP BY actors.name