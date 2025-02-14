import express from "express";


const dashboardRoutes = express.Router();
dashboardRoutes.get('/', (req, res) => {
    res.send('Dashboard Home');
});
dashboardRoutes.get('/stats', (req, res) => {
    res.send('Dashboard Stats');
});

dashboardRoutes.post('/update', (req, res) => {
    res.send('Dashboard Updated');
});


export default dashboardRoutes;