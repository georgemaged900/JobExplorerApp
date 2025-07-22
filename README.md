 
Job Explorer App – React Native Frontend + ASP.NET Core API Backend

A full-stack mobile job listing app where users can search for jobs by position or location. It consists of:

Frontend: React Native (Expo)

Backend: ASP.NET Core Web API

Hosting: Azure Web App

 How to Run This Project

1. Clone the Repository

git clone (https://github.com/georgemaged900/JobExplorerApp/tree/master)
cd job-explorer

 Backend Setup (.NET 8+)

 Location

/JobListing.API

 Requirements

.NET 8 SDK


Run the API

cd JobListing.API
dotnet restore
dotnet run

The API will run on:

https://localhost:5001 or https://joblistingapi-d3g2azgvcgc4ecbz.northeurope-01.azurewebsites.net/api/Jobs

 Key Features

RESTful GET endpoint: /api/Jobs

CORS enabled for frontend

Swagger enabled for API testing


----------------------------------------------------------------------------------------
 Frontend Setup (React Native Expo)

 Location

/JobExplorerApp

 Requirements

Node.js

Expo CLI

npm install -g expo-cli

6 Install Dependencies

cd JobExplorerApp
npm install

 Run the App

expo start

Scan QR with Expo Go (Android/iOS)

 Search Feature

Type job title or location to filter results in real-time

 Project Structure

JobExplorerApp/
├── components/
│   └── JobCard.js         # Job UI card component
├── App.js                 # Main job list with search

JobListing.API/
├── Controllers/
│   └── JobsController.cs  # Jobs API endpoint
├── Services/
│   └── JobService.cs      # Business logic
├── Program.cs             # Startup + CORS config


----------------------------------------------------------------------------
 Tech Stack

Frontend: React Native, Axios, Expo

Backend: ASP.NET Core Web API

Deployment: Azure Web App (backend)
----------------------------------------------------

 Future Improvements

Pagination for job listings

Apply button linking to external job URL

Filters by company, experience, remote/in-office

