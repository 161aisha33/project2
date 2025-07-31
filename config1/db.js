import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

// Create a connection pool
export const pool = mysql.createPool({
    database: process.env.DB_NAME,   
    port: process.env.DB_PORT,        
    user: process.env.DB_USER,        
    password: process.env.DB_PASSWORD, 
    host: process.env.DB_HOST          
});

// Log the database configuration for debugging
console.log('Database Config:', {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

