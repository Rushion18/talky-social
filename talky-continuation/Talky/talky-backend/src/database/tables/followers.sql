CREATE TABLE Followers (
    follower_id VARCHAR(100) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    follower_user_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (follower_id),
    FOREIGN KEY (user_id) REFERENCES users(_id),
    FOREIGN KEY (follower_user_id) REFERENCES users(_id)
);


select * from Followers



drop table Followers