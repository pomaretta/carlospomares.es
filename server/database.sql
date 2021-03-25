DROP DATABASE IF EXISTS personal_site;
CREATE DATABASE personal_site;
USE personal_site;

-- CREATING TABLES

CREATE TABLE Projects (
    id              INT NOT NULL AUTO_INCREMENT,
    title           VARCHAR(255) NOT NULL,
    subtitle        VARCHAR(255) NOT NULL,
    description     VARCHAR(255) NOT NULL,
    image           VARCHAR(255) NOT NULL,
    href            VARCHAR(255) NOT NULL,
    featured        BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

-- INSERTS

INSERT INTO Projects(title,subtitle,description,image,href) VALUES ("Template Title","Template Subtitle","Template Description","https://github.com/pomaretta/taskvisor/blob/master/preview.png","https://github.com/pomaretta/taskvisor/blob/master/preview.png");