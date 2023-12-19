CREATE TABLE Posts (
    post_id VARCHAR(100) NOT NULL PRIMARY KEY,
    post_description VARCHAR(800) NOT NULL,
    post_image VARCHAR(800) NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(_id)
);


select * from Posts



DROP TABLE Posts