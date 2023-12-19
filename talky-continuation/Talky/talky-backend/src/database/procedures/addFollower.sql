CREATE OR ALTER PROCEDURE addFollower(
    @follower_id VARCHAR(100),
    @user_id VARCHAR(100),
    @follower_user_id VARCHAR(100)
)
AS
BEGIN
    INSERT INTO Followers(follower_id, user_id, follower_user_id)
    VALUES(@follower_id, @user_id, @follower_user_id)
END
