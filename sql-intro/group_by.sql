-- 1.
SELECT billing_state, SUM(total) FROM invoice GROUP BY billing_state;


-- 2.
SELECT al.title, AVG(tr.milliseconds) avg 
FROM track tr 
JOIN album al 
ON tr.album_id = al.album_id 
GROUP BY al.title 
ORDER BY avg;


-- 3.
SELECT artist_id, COUNT(album_id) 
FROM album 
WHERE artist_id IN (8,22) 
GROUP BY artist_id;