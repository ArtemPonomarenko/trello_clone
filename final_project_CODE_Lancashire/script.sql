CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    user_password VARCHAR(255)
);
CREATE TABLE boards(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    board_name VARCHAR(255),
    user_id INT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE lists(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    table_name VARCHAR(255),
    index INT,
    board_id INT NOT NULL,
    FOREIGN KEY(board_id) REFERENCES boards(id)
);
CREATE TABLE cards(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    card_name VARCHAR(255),
    card_description VARCHAR(255),
    index INT,
    list_id INT NOT NULL,
    FOREIGN KEY(list_id) REFERENCES lists(id)
);