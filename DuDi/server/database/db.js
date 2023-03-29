const { Router } = require('express');
/* extracting check function to validate rthe fields */
const { check } = require('express-validator');
/* importing usr controller */
/* creating a router */
const router = Router();

const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'dudi',
    user: 'root',
    password: 'admin'
});

conexion.connect(function(error){
    if(error) {
        console.log(error);
        throw error;
    }else {
        console.log('CONEXION EXITOSA');
    }
})

conexion.query('SELECT * from Users', (error, results, fields) => {
    if(error) throw error;

    results.forEach(element => {
        console.log(element);
    })
});


/* creating a navigation */
router.get('/users', (req, res) => {
    conexion.query('SELECT * from Users', (error, results, fields) => {
        if(error) throw error;
    
        res.json(results)
    });

    res.status(200).json({
        ok: true,
        message: 'Getting users from controllers'
    })
} )


module.exports = router


    conexion.end()

    module.exports = router