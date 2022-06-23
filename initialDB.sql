
CREATE DATABASE BPS_PROJECT_DB;

USE BPS_PROJECT_DB;

CREATE TABLE STUDENT (
	ID INT IDENTITY(1,1) PRIMARY KEY, 
	NAME VARCHAR(100)
);
CREATE TABLE TEACHER (
	ID INT IDENTITY(1,1) PRIMARY KEY, 
	NAME VARCHAR(100)
);
CREATE TABLE GRADE (
	ID INT IDENTITY(1,1) PRIMARY KEY, 
	NAME VARCHAR(100), 
	GRADE_VALUE DECIMAL, 
	TEACHERID INT, 
	STUDENTID INT
);

ALTER TABLE GRADE ADD FOREIGN KEY (TEACHERID) REFERENCES TEACHER(ID);
ALTER TABLE GRADE ADD FOREIGN KEY (STUDENTID) REFERENCES STUDENT(ID);

INSERT INTO STUDENT VALUES ('Luis Garcia'),('Jose Restrepo'), ('Andres Correa');
INSERT INTO TEACHER VALUES ('Jose Higuita'),('Maria Velez'), ('Lina Lopez');
INSERT INTO GRADE VALUES ( 'Nota 1', 3.5, 1,1),( 'Nota 2', 2.4, 1,1),( 'Nota 3', 4.8, 1,1),
						 ( 'Nota 1', 4, 1,2),( 'Nota 2', 3.7, 1,2),( 'Nota 3', 3.8, 1,2),
						 ( 'Nota 1', 2.8, 1,3),( 'Nota 2', 5, 1,3),( 'Nota 3', 3, 1,3),
						 ( 'Nota 1', 4, 2,1),( 'Nota 2', 2.4, 2,1),( 'Nota 3', 4.8, 2,1),
						 ( 'Nota 1', 4.5, 2,2),( 'Nota 2', 3.7, 2,2),( 'Nota 3', 3.8, 2,2),
						 ( 'Nota 1', 1, 2,3),( 'Nota 2', 5, 2,3),( 'Nota 3', 4, 2,3),
						 ( 'Nota 1', 3.1, 3,1),( 'Nota 2', 4, 3,1),( 'Nota 3', 3, 3,1),
						 ( 'Nota 1', 2.5, 3,2),( 'Nota 2', 3, 3,2),( 'Nota 3', 3.8, 3,2),
						 ( 'Nota 1', 5, 3,3),( 'Nota 2', 3, 3,3),( 'Nota 3', 4, 3,3);