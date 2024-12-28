package com.hotelmanagment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {

    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/hotel_management"; // Updated database name
    private static final String JDBC_USERNAME = "root"; // Your MySQL username
    private static final String JDBC_PASSWORD = "91_Shashi@2006"; // Your MySQL password

    // Method to establish a connection to the MySQL database
    public static Connection getConnection() throws SQLException {
        try {
            // Register the JDBC driver (MySQL)
            Class.forName("com.mysql.cj.jdbc.Driver"); // For MySQL 8.x+
            return DriverManager.getConnection(JDBC_URL, JDBC_USERNAME, JDBC_PASSWORD);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            throw new SQLException("JDBC Driver not found.");
        }
    }
}