CREATE OR ALTER PROCEDURE createPost(
    @post_id VARCHAR(100),
    @post_description VARCHAR(800),
    @post_image VARCHAR(800),
    @user_id VARCHAR(100)
)
AS
BEGIN
    INSERT INTO Posts(post_id, post_description, post_image, user_id)
    VALUES(@post_id, @post_description, @post_image, @user_id)
END
