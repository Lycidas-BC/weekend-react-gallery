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
	VALUES ('undeveloped film stock', '../../images/35mm-undeveloped-film-stock.jpg', 'A piece of film consists of a light-sensitive emulsion applied to a tranparent base', '0'),
	('nitrate', '../../images/notrocellulose.png', 'Nitrocellulose or nitrate was the original base used for film', '0'),
	('burnt nitrate', '../../images/dawson_city-burnt.png', 'Nitrate''s original use was guncotton, a replacement for gunpowder. It''s chemically similar to nitroglycerin (dynamite)', '0'),
	('film canisters with warning labels', '../../images/the_man_who_knew_too_much_01_nitrate.png', 'It''s not just flammable. It''s explosive.', '0'),
	('London After Midnight poster', '../../images/london_after_midnight.jpg', 'The vast majority of early films are lost forever.', '0'),
	('Wings poster', '../../images/wings.jpg', 'Occasionally, lost films are rediscovered. Wings (1927), the first Best Picture Oscar winner, was believed lost until 1992.', '0'),
	('The City Without Jews poster', '../../images/die_stadt_ohne_juden.jpg', 'In 2015, a print of The City Without Jews (1924) was found in a Paris flea market.', '0'),
	('The City Without Jews still', '../../images/die_stadt_ohne_juden_2.jpg', 'Made over a decade before Kristallnacht, the film depicts a distopia which expells its Jewish population.', '0'),
	('The City Without Jews still', '../../images/die_stadt_ohne_juden_3.jpg', 'Initially, the move is celebrated. But before long, the city culturally and economically declines. The film was believed destroyed by the Nazis.', '0'),
	('Dawson City: Frozen Time (2016) screenshot', '../../images/dawson_city-discovered_film.png', 'In 1978, 533 reels of film from the turn of the century were found under a hockey rink, frozen in the permafrost.', '0'),
	('Decomposing nitrate film', '../../images/Decomposing_Nitrate_Film.jpg', 'Even if it doesn''t burn, film still degrades over time.', '0'),
	('After the Curfew (1954) warped reel', '../../images/after_the_curfew_01_film_reel.jpg', 'It accumulates scratches and dirt. It warps and tears and becomes very fragile.', '0'),
	('After the Curfew damage', '../../images/after_the_curfew_02_damaged_film.jpg', 'This creates the need for film restoration and preservation.', '0'),
	('After the Curfew restoration', '../../images/after_the_curfew_03_repaired_film.jpg', 'Breaks in the film need to be repaired.', '0'),
	('Film Scanner with pins', '../../images/film_scanner_with_pins.png', 'Machines such as this one create high-res scans of each frame, using sprockets that match the film''s perforations.', '0'),
	('assessing shrinkage', '../../images/assessing_shrinkage.png', 'If the film has warped or shrunk, the scanner risks tearing it causing further damage.', '0'),
	('Film Scanner without pins', '../../images/pinless_film_scanner.png', 'This is a newer scanner without pins. It doesn''t risk tearing the film, but the image is less stable within the frame which must be corrected after', '0'),
	('Apu Trilogy restoration', '../../images/apu_02_perforating-by-hand.png', 'The film restorer hand-perforates the reinforced film before a scan.', '0'),
	('Apu trilogy restoration - before and after', '../../images/apu_01_before-after.jpg', 'In 1990, Martin Scorsese founded The Film Foundation, one of many companies seeking to restore, preserve, and exhibit classic cinema from around the world.', '0'),
	('After the Curfew - before and after', '../../images/after_the_curfew_04_frame_before_after.jpg', 'Distributors such as the Criterion Collection, Arrow Video, Cohen Media, Powerhouse Films, and Flicker Alley make many of these films available on DVD and blu-ray.', '0'),
	('After the Curfew - before and after', '../../images/after_the_curfew_05_frame_before_after.jpg', 'Many of these releases include essays, commentaries, and suplements in which historians and experts help contextualize the movies', '0');

-- select query
SELECT * FROM "images" ORDER BY "id";