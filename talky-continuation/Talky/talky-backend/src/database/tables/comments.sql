
CREATE TABLE Comments
(
    comment_id VARCHAR(100) NOT NULL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    post_id VARCHAR(100) NOT NULL,
    comment_text VARCHAR(800) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES users(_id),
    FOREIGN KEY (post_id) REFERENCES Posts(post_id)
);



select * from Comments


drop table Comments