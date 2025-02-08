**

## README

**
Introduction

The Real-Time Event Ticketing System is a robust platform designed to handle dynamic ticket sales and management efficiently. The system utilizes a producer-consumer model to allow multiple vendors (producers) to add tickets and multiple customers (consumers) to purchase tickets concurrently. It ensures thread safety, data integrity, and real-time updates via WebSocket integration.

## Key features include:
CLI-based configuration for advanced users.

CLI-based configuration for advanced users.

Real-time updates and monitoring via a WebSocket-enabled frontend.

Scalability for large-scale simulations with multiple vendors and customers.

Persistent configuration storage in a JSON file.

## Setup Instructions

Before setting up the application, ensure that you have the following installed on your system:

## Backend Setup

	1. Java Development Kit (JDK): Version 17 or higher
	2. Node.js: Version 20.x or higher

## Frontend Setup
1. npm: Comes bundled with Node.js
2. To install node files, 
>npm install

## Use Instructions
1. Start the backend application and Run
2. Start the frontend application and type on the console, 
 > npm run dev

## Frontend UI Controls
1. Dashboard: Displays live Ticket Release Updates & Ticket Purchasing Updates

2. Configuration: Allows you to modify system parameters such as Total Number of Tickets, Ticket Release Rates, Customer Retrieval Rate & Maximum Ticket Capacity 

3. Vendors: Displays vendor table. You can add vendors, start & stop vendors and remove vendors.

4. Customers: Displays customers table. You can add customers, start & stop customers and remove customers.


	

	
	
	
	
For further assistance, please contact anjanarusiru360@gmail.com
