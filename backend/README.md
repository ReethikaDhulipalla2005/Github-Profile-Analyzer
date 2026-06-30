# GitHub Profile Analyzer Backend

A Node.js + Express backend application that analyzes GitHub user profiles using the GitHub Public API and stores insights in a MySQL database.

---

## Features

- Fetch GitHub user profile using username
- Fetch all public repositories
- Analyze GitHub data:
  - Total repositories
  - Followers & Following
  - Public gists
  - Account age
  - Total stars across repositories
  - Total forks
  - Most starred repository
- Store analyzed data in MySQL
- Retrieve all stored profiles
- Retrieve single profile

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- Axios
- dotenv
- cors

---

## GitHub Public API Used

### Get User Profile
https://api.github.com/users/{username}

### Get User Repositories
https://api.github.com/users/{username}/repos

---

## Project Setup

### 1. Clone Project
- git clone https://github.com/ReethikaDhulipalla2005/Github-Profile-Analyzer
- cd github-profile-analyzer
- cd backend

### 2. Install Dependencies
 npm install

### 3. Setup MySQL Database

```sql
CREATE DATABASE github_profile_db;

USE github_profile_db;

CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    github_username VARCHAR(100),
    name VARCHAR(255),
    public_repository_count INT,
    followers INT,
    following INT,
    public_gists INT,
    account_creation_date DATETIME,
    account_age VARCHAR(50),
    profile_url TEXT,
    total_stars INT,
    total_forks INT,
    most_starred_repository VARCHAR(255),
    last_updated_time DATETIME
);
```

### 4.Run Project
    npm run dev

### Server runs on:

    https://github-profile-analyzer-g6aw.onrender.com

---

## API Endpoints

### 1. Analyze GitHub Profile

POST /api/profile/:username

### 2. Get All Profiles

GET /api/profiles

### 3. Get Single Profile

GET /api/profile/:username

---