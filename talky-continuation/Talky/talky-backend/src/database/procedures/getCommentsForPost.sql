CREATE PROCEDURE getCommentsForPost
    @post_id VARCHAR(100)
AS
BEGIN
    SELECT 
        comment_id,
        user_id,
        comment_text,
        created_at
    FROM Comments
    WHERE post_id = @post_id;
END;
