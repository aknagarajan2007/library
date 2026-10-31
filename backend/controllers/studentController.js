const db = require('../db');

async function createStudent(req, res) {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                message: 'Email is required'
            });
        }

        const [result] = await db.query(
            'INSERT INTO STUDENTS (email) VALUES (?)',
            [email]
        );

        res.status(201).json({
            message: 'Student created successfully',
            id: result.insertId
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Database error'
        });
    }
}

module.exports = {
    createStudent
};