// require funktionen tillader at vi kan hente data fra andre JS-filer
// nedenfor ses det, at vi henter data fra UserData-filen samt jsonwebtoken-filen, som ligger i Node_modules-mappen
users = require('../Godkendelsesopgave3server/UserData')
var jwt = require('jsonwebtoken');

function loginController(req, res) {
    //man kunne også tjekke her om token findes. 
    jwt.verify(req.token, 'programming_rocks', function(err, data){
        if(err){
            res.sendStatus(403); // HTTP 403 er en HTTP statuskode, som betyder, at der ikke er adgang til den ønskede ressource ("Forbidden")
        } else{
            res.json({
                msg: "Det her er beskyttet",
                data: data
            })
        }
    }) 
}
// module.exports gør, at vi kan eksportere vores loginController, og anvende det i andre js.filer
module.exports = loginController