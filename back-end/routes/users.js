var express = require('express');
var router = express.Router();
const sql = require('mssql');
const config = {
  user: 'bissoli.marco',  //Vostro user name
  password: 'xxx123#', //Vostra password
  server: "213.140.22.237",  //Stringa di connessione
  database: 'bissoli.marco', //(Nome del DB)
}

/* GET users listing. */
router.get('/fiori', function(req, res, next) {
  sql.connect(config, err => {
    if(err) console.log(err);  // ... error check
    
    // Query
    let sqlRequest = new sql.Request();  //Oggetto che serve a creare le query
    sqlRequest.query('select * from dbo.Fiore', (err, result) => {
        if (err) console.log(err); // ... error checks
        res.send(result);  //Invio il risultato
    });
  });
});

router.post('/inserisci', function (req, res, next) {
  console.log(req.body);
  // Add a new Unit  
  let unit = req.body;
  if (!unit) {
    next(createError(400 , "Please provide a correct unit"));
  }
  sql.connect(config, err => {
    let sqlInsert = `INSERT INTO dbo.[Fiore] (ID,Nome_Comune,Altezza,Colore,Periodo_Fioritura,Note,URL_Immagine,Famiglia_Appartenenza,Nome_Scientifico) 
                     VALUES ('${unit.ID}','${unit.Nome_Comune}','${unit.Altezza}','${unit.Colore}','${unit.Periodo_Fioritura}','${unit.Note}','${unit.URL_Immagine}','${unit.Famiglia_Appartenenza}','${unit.Nome_Scientifico}')`;
    let sqlRequest = new sql.Request();
    sqlRequest.query(sqlInsert, (error, results) => {
      if (error) throw error;
      return res.send({ error: false, data: results, message: 'Un nuovo fiore è stato aggiunto con successo!.' });
    });
  })
});

module.exports = router;