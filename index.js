const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){ 
    db.run("CREATE TABLE Instructor (ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");

    db.run("INSERT INTO Instructor VALUES(10101, 'Chris', 'Data Management', 65000)");
    db.run("INSERT INTO Instructor VALUES(10102, 'Robert', 'Entrepreneurship', 90000)");
    db.run("INSERT INTO Instructor VALUES(10103, 'Ben', 'Android', 70000)");
    db.run("INSERT INTO Instructor VALUES(10104, 'Marc', 'IOS', 80000)");
    db.run("INSERT INTO Instructor VALUES(10105, 'Moos', 'Design', 60000)");
    db.run("INSERT INTO Instructor VALUES(10106, 'Alvira', 'Data Management', 65000)");
    db.run("INSERT INTO Instructor VALUES(10107, 'Priyanka', 'Entrepreneurship', 90000)");
    db.run("INSERT INTO Instructor VALUES(10108, 'Manpreet', 'Android', 70000)");
    db.run("INSERT INTO Instructor VALUES(10109, 'Chanchal', 'IOS', 80000)");
    db.run("INSERT INTO Instructor VALUES(10110, 'Prathima', 'Design', 60000)");

    db.each("SELECT name FROM Instructor",function(err,row){
        console.log(row);
    });

    });