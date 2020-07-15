
CREATE DATABASE ManageExp_database;

CREATE TABLE Hosts
(
    Id INTEGER PRIMARY KEY,
    HostName VARCHAR(255),
    CreatedOn DATE,
    UpdatedOn DATE
);

CREATE TABLE Clients
(
    Id INTEGER PRIMARY KEY,
    Company VARCHAR(255),
    TechnicalManager VARCHAR(255),
    DomainId INTEGER REFERENCES Hosts(Id),
    Email VARCHAR(255),
    PhoneNumber VARCHAR(255),
    CreatedOn DATE,
    UpdatedOn DATE
);