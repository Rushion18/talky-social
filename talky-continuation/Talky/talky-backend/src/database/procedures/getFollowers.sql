CREATE OR ALTER PROCEDURE getFollowers (
    @user_id VARCHAR(100)
)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT F.follower_id, U.username AS follower_username
    FROM Followers F
    JOIN Users U ON F.follower_user_id = U._id
    WHERE F.user_id = @user_id;
END;
