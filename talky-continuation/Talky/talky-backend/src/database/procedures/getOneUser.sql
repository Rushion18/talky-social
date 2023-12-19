

CREATE OR ALTER PROCEDURE getOneUser
(
     @user_id VARCHAR(100)
)
AS
BEGIN
    SELECT * FROM Users WHERE _id = @user_id
END


