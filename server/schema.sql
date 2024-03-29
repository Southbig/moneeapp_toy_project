-- CREATE TABLE users (
--   id INT AUTO_INCREMENT,
--   email varchar(255),
--   password varchar(255),
--   created_at datetime DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id)
-- );
-- CREATE TABLE posts (
--   id INT AUTO_INCREMENT,
--   user_id INT,
--   message varchar(255),
--   total_comments INT,
--   created_at datetime DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id)
-- );
-- CREATE TABLE post_comments (
--   id INT AUTO_INCREMENT,
--   user_id INT,
--   post_id INT,
--   comments varchar(255),
--   created_at datetime DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (id)
-- );
-- ALTER TABLE users ADD FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders (id);
-- ALTER TABLE order_items ADD FOREIGN KEY (item_id) REFERENCES items (id);