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


controller.save = (req, res) =>{
    //console.log(req.body);
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO students set ?', [data], (err, student)=>{
            console.log(student);
            res.redirect('/');
        });
    })
};

controller.edit = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM students WHERE id = ?', [id], (err, student) =>{
            res.render('student_edit', {
                data: student[0]
            });
        });
    });
};

controller.update = (req, res) =>{
    const { id } = req.params;
    const newStudent = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE students set ? WHERE id = ?', [newStudent, id], (err, rows) =>{
            res.redirect('/');
        })
    });
};

controller.delete = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM students WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        }); 
    })
};


module.exports = controller; 