var express = require('express');
var router = express.Router();
const sql = require('mssql');
const config = {
  user: 'bissoli.marco',  
  password: 'xxx123#',
  server: "213.140.22.237",  
  database: 'bissoli.marco', 
}

router.get('/fiori', function(req, res, next) {
  sql.connect(config, err => {
    if(err) console.log(err);  
    
    let sqlRequest = new sql.Request();  
    sqlRequest.query('select * from dbo.Fiore', (err, result) => {
        if (err) console.log(err); 
        res.send(result.recordset);  
    });
  });
});

router.get('/fiore/:ID', function (req, res, next) {
    sql.connect(config, err => {
    if(err) console.log(err);
    console.log(req.params.ID);
    let sqlRequest = new sql.Request();
    sqlRequest.query(`SELECT * FROM dbo.[Fiore] WHERE ID = '${req.params.ID}'`, (err, result) => {
        if (err) console.log(err);
        
        res.send(result.recordset[0])
    });
  });
});

router.post('/inserisci', function (req, res, next) {
  console.log(req.body);
   
  let fiore = req.body;
  if (!fiore) {
    next(createError(400 , "Please provide a correct flower"));
  }
  sql.connect(config, err => {
    let sqlInsert = `INSERT INTO dbo.[Fiore] (ID,Nome_Comune,Altezza,Periodo_Fioritura,Note,Colore,URL_Immagine,Famiglia_Appartenenza,Nome_Scientifico) 
                     VALUES ('${fiore.ID}','${fiore.Nome_Comune}','${fiore.Altezza}','${fiore.Periodo_Fioritura}','${fiore.Note}','${fiore.Colore}','${fiore.URL_Immagine}','${fiore.Famiglia_Appartenenza}','${fiore.Nome_Scientifico}')`;
    let sqlRequest = new sql.Request();
    sqlRequest.query(sqlInsert, (error, results) => {
      if (error) throw error;
      res.send({ error: false, data: results, message: 'Un nuovo fiore è stato aggiunto con successo!'});
    });
  })
});

module.exports = router;
