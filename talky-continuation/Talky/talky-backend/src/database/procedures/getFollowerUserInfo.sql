CREATE OR ALTER PROCEDURE getFollowerUserInfo (
    @user_id VARCHAR(100),
    @follower_user_id VARCHAR(100)
)
AS
BEGIN
    SET NOCOUNT ON;

    SELECT follower_user_id
    FROM Followers
    WHERE user_id = @user_id AND follower_user_id = @follower_user_id;
END;
