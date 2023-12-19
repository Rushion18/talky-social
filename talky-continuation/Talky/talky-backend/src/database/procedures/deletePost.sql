CREATE PROCEDURE deletePost
  @post_id VARCHAR(100)
AS
BEGIN
  DELETE FROM Likes WHERE post_id = @post_id;
  DELETE FROM Comments WHERE post_id = @post_id;
  DELETE FROM Posts WHERE post_id = @post_id;

  SELECT @@ROWCOUNT AS RowsAffected;
END;
