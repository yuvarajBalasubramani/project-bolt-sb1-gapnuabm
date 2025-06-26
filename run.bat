@echo off
ECHO Starting Backend Server...
cd Backend
start "Backend" cmd /k "npm install && npm start"

ECHO Starting Frontend Development Server...
cd ../project
start "Frontend" cmd /k "npm install && npm run dev" 