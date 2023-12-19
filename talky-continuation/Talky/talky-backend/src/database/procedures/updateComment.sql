CREATE PROCEDURE updateComment
    @comment_id VARCHAR(100),
    @comment_text VARCHAR(800)
AS
BEGIN
    UPDATE Comments
    SET comment_text = @comment_text
    WHERE comment_id = @comment_id;
END;
