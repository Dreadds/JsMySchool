const controller = {};

controller.list =  (req, res) =>{
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM students', (err, students) =>{
            if (err) {
                res.json(err);
            }
            console.log(students);
            res.render('students',{
                data: students
            });
        });
    });
};



module.exports = controller;