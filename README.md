# Hotel Management System

## Overview

The **Hotel Management System** is a Java-based application designed to manage hotel rooms, customers, and bookings. It uses MySQL as the database to store and retrieve data efficiently and integrates seamlessly with a backend database using JDBC.

This system allows users to:
- Add and manage hotel rooms.
- Retrieve room details by ID.
- Filter rooms by price range.
- Manage room inventory (e.g., check availability, count total rooms).

---

## Features

- **Room Management**: Add, update, delete, and retrieve room details.
- **Inventory Management**: Query and manage room availability and pricing.
- **Customer-Friendly**: Ensures seamless integration with hotel operations.
- **Scalable Design**: Easily extendable to include customer and booking management.

---

## Technology Stack

- **Programming Language**: Java
- **Database**: MySQL
- **Frontend (Optional)**: HTML, CSS, JavaScript
- **Tools/Technologies**:
  - JDBC for database connectivity.
  - VS Code or IntelliJ IDEA for development.
  - MySQL Workbench for database management.

---

## Database Schema

The system uses a `hotel_management` database with the following tables:

### `rooms`
| Column Name      | Data Type        | Constraints             | Description                   |
|-------------------|------------------|-------------------------|-------------------------------|
| `roomId`         | INT             | PRIMARY KEY, AUTO_INCREMENT | Unique identifier for each room. |
| `roomType`       | VARCHAR(50)     | NOT NULL                | Type of the room (e.g., Single, Double, Suite). |
| `isAvailable`    | BOOLEAN         | DEFAULT TRUE            | Room availability status.     |
| `pricePerNight`  | DECIMAL(10, 2)  | NOT NULL                | Cost of the room per night.   |


CREATE DATABASE hotel_management;
USE hotel_management;

CREATE TABLE rooms (
    roomId INT AUTO_INCREMENT PRIMARY KEY,
    roomType VARCHAR(50) NOT NULL,
    isAvailable BOOLEAN DEFAULT TRUE,
    pricePerNight DECIMAL(10, 2) NOT NULL
);


---

## Setup Instructions

### Prerequisites

1. **Java**: JDK 8 or higher installed.
2. **MySQL**: Installed and running.
3. **MySQL Connector**: Add the JDBC driver to your project.
4. **IDE**: Use VS Code, IntelliJ IDEA, or Eclipse for development.

---

### Steps to Run

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-repo/hotel-management-system.git
   cd hotel-management-system

