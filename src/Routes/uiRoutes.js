import express from "express";

const uiRoutes = express.Router();
uiRoutes.get('/', (req, res) => {
    res.send('UI Home Page');
});
uiRoutes.get('/theme', (req, res) => {
    res.send('UI Theme Settings');
});


export default uiRoutes;
