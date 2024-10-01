const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const filePath = path.join(__dirname, '../../data.json');

// Function to read data from JSON
const readData = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};

// Function to get all projects
const getAllProjects = () => {
    const data = readData();
    return data.projects;
};

module.exports = { getAllProjects };
