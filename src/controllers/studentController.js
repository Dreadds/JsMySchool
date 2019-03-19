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
            res.redirected('/');
        });
    })
};

module.exports = controller; 