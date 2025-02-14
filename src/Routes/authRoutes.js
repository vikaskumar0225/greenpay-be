import express from "express";
const authRoutes = express.Router();
authRoutes.post('/login', (req, res) => {
    res.send('User Logged In');
});
authRoutes.post('/register', (req, res) => {
    res.send('User Registered');
});
authRoutes.post('/logout', (req, res) => {
    res.send('User Logged Out');
});


export default authRoutes;