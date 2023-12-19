CREATE TABLE users (
    _id VARCHAR(100) NOT NULL PRIMARY KEY,
    username varchar(100) NOT NULL,
    email varchar(250) NOT NULL,
    password varchar(250) NOT NULL,
    followers VARCHAR(255)
)

select * from users



drop table users