-- Create Database
CREATE DATABASE hotel_managment;

-- Use the Database
USE hotel_managmentt;

-- Table: Customers
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15),
    Address TEXT
);

-- Table: Rooms
CREATE TABLE Rooms (
    RoomID INT AUTO_INCREMENT PRIMARY KEY,
    RoomType VARCHAR(50),
    PricePerNight DECIMAL(10, 2),
    IsAvailable BOOLEAN DEFAULT TRUE
);

-- Table: Bookings
CREATE TABLE Bookings (
    BookingID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    RoomID INT,
    CheckInDate DATE,
    CheckOutDate DATE,
    TotalAmount DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (RoomID) REFERENCES Rooms(RoomID)
);
