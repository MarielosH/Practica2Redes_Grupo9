const controller = {};
const { Pool } = require('pg');



let config = {
     host: '35.196.46.227',
     user: 'postgres',
     database: 'REDES',
     password: 'root'
}; 


const pool = new Pool(config);

controller.list = (req, res) => {
    

    res.render("home");
}

controller.book =async (req, res) => {
    const query = 'select * from books';
    const values = [];
    let resp = await pool.query(query, values);
   

    res.render("books",{
        datali: resp.rows
     });
}


controller.bookadd = async(req, res) => {
    const { titulo, autor, anio } = req.body;

    const query = 'insert into books(titulo,autor,anio) VALUES($1,$2,$3)';
    const values = [titulo, autor,anio];
    await pool.query(query, values);


    const query2 = 'select * from books';
    const values2 = [];
    let resp = await pool.query(query2, values2);
   
    res.render("books",{
        datali: resp.rows
     });
}

module.exports = controller;