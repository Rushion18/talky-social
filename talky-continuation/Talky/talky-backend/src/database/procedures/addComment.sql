
CREATE OR ALTER PROCEDURE addComment (
    @comment_id VARCHAR(100),
    @user_id VARCHAR(100),
    @post_id VARCHAR(100),
    @comment_text VARCHAR(800)
)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Comments(comment_id, user_id, post_id, comment_text)
    VALUES(@comment_id, @user_id, @post_id, @comment_text);
END;

