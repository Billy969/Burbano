```bat
@echo off
cd backend
start cmd /k "npm install && npm run dev"
cd ../frontend
start cmd /k "npm install && npm start"