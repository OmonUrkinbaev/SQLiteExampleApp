# SQLiteExampleApp

Android application demonstrating local data persistence using SQLite
with full CRUD (Create, Read, Update, Delete) functionality.

## 📱 Project Overview
This project showcases working with a local SQLite database in an Android application.
It focuses on data storage, retrieval, and manipulation while maintaining a simple
and clear user interface.

The application is intended as a practical example of how mobile apps manage
persistent data without relying on cloud services. There's also a video about it on my youtube channel! 

[![SQLiteExampleApp – Development Walkthrough](https://img.youtube.com/vi/OW3Q4aDfwLk/0.jpg)](https://www.youtube.com/watch?v=OW3Q4aDfwLk&t)

### Video Highlights
- Project setup and structure
- SQLite database creation
- CRUD operations implementation
- UI and database integration
- Data persistence demonstration

## ✨ Features
- Create new records
- Read stored records from SQLite database
- Update existing records
- Delete records
- Data persistence after app restart

## 🛠 Tech Stack
- Java
- Android SDK
- SQLite
- Android Studio

## 🧩 Architecture
- Basic layered approach
- UI layer interacts with database helper
- SQLiteOpenHelper used for database management

## 🧪 Testing Focus
This application can be used as a demo project for:
- Manual testing
- CRUD validation
- Data persistence testing
- Edge case handling

## 🚀 Use Case
The project demonstrates understanding of:
- Local databases
- Data persistence
- Basic application architecture
- User interaction with stored data

This repository can also be used as a base application
for QA test scenario creation and automation experiments.

## 🧪 Test Scenarios

### 1. Create Record
- Add a new record with valid data
- Verify record appears in the list
- Restart the app and verify data persistence

### 2. Create Record with Empty Fields
- Attempt to save a record with empty input fields
- Verify validation message or prevention of saving

### 3. Read Records
- Verify all saved records are displayed correctly
- Verify correct data mapping from database to UI

### 4. Update Record
- Update an existing record
- Verify updated data is saved correctly
- Restart the app and confirm changes persist

### 5. Delete Record
- Delete an existing record
- Verify record is removed from UI
- Restart app and confirm record is not restored

### 6. Database Persistence
- Add multiple records
- Close the app
- Reopen and verify all data is intact

### 7. Edge Cases
- Very long text input
- Special characters input
- Rapid create/delete actions

🔗 Full development video: https://www.youtube.com/watch?v=OW3Q4aDfwLk
