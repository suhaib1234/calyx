const Project = require('../models/project');

// Get all projects with pagination and filtering
const getProjects = (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Fetch all projects
    const projects = Project.getAllProjects();

    // Filter by query parameters
    const filteredProjects = projects.filter(project => {
        let match = true;

        if (req.query.ghg_methodology) {
            match = match && project.ghg_methodology === req.query.ghg_methodology;
        }

        if (req.query.ghg_risk_rating) {
            // Make sure to check against the ratings correctly
            match = match && project.ratings.some(rating => rating.ghg_risk_rating == req.query.ghg_risk_rating);
        }

        return match;
    });

    // Paginate the filtered results
    const paginatedResults = filteredProjects.slice(startIndex, endIndex);

    // Return the paginated results along with total count
    res.json({
        total: filteredProjects.length,
        page: page,
        limit: limit,
        data: paginatedResults
    });
};

module.exports = { getProjects };
