CREATE TABLE Likes (
  like_id VARCHAR(100) PRIMARY KEY,
  user_id VARCHAR(100),
  post_id VARCHAR(100),
  created_at DATETIME DEFAULT GETDATE(),
  
  FOREIGN KEY (user_id) REFERENCES users(_id), 
  FOREIGN KEY (post_id) REFERENCES Posts(post_id) 
);


SELECT * from Likes

drop table likes
