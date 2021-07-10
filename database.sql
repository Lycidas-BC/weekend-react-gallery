-- db name: react_gallery

-- create table query
CREATE TABLE "images" (
    "id" serial PRIMARY KEY,
    "name" varchar(100) NOT NULL,
    "path" varchar(255) NOT NULL,
    "description" varchar(255),
    "likes" int DEFAULT '0'
);

-- insert query
INSERT INTO "images" ("name", "path", "description", "likes")
VALUES ('film_reel', '../../images/after_the_curfew_01_film_reel.jpg', 'warped film stock from Usmar Ismail''s "After the Curfew" (1954)', '0');

-- select query
SELECT * FROM "images" ORDER BY "id";