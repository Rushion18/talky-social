"use strict";
CREATE;
OR;
ALTER;
PROCEDURE;
addComment(, VARCHAR(100), , VARCHAR(100), , VARCHAR(100), , VARCHAR(800));
AS;
BEGIN;
SET;
NOCOUNT;
ON;
INSERT;
INTO;
Comments(comment_id, user_id, post_id, comment_text);
VALUES(, , , );
END;
CREATE;
OR;
ALTER;
PROCEDURE;
getCommentsForPost(, VARCHAR(100));
AS;
BEGIN;
SET;
NOCOUNT;
ON;
SELECT;
comment_id, user_id, post_id, comment_text, created_at;
FROM;
Comments;
WHERE;
post_id = ;
END;
