CREATE PROCEDURE getPostById
    @post_id VARCHAR(100)
AS
BEGIN
    SELECT * FROM Posts WHERE post_id = @post_id;
END;