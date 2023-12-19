CREATE PROCEDURE likePost
  @like_id VARCHAR(100),
  @user_id VARCHAR(100),
  @post_id VARCHAR(100)
AS
BEGIN
  INSERT INTO Likes (like_id, user_id, post_id)
  VALUES (@like_id, @user_id, @post_id);

  SELECT 'Post liked successfully' AS Message;
END;



-- DROP PROCEDURE likePost
