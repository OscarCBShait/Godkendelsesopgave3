// require funktionen tillader at vi kan hente data fra andre JS-filer
// nedenfor ses det, at vi henter data fra UserData-filen samt jsonwebtoken-filen, som ligger i Node_modules-mappen
const users = require('../Godkendelsesopgave3server/UserData')
var jwt = require('jsonwebtoken');


// her anvender vi den funktion, som vi lavede i "protectedController"-filen. Den er importeret derfra
function loginController(req, res) {
   
    //Her laves en token, som dør om to timer. Vores Token skal man printe to users, hvilket fremgår af jwt.sing({users}
    const token = jwt.sign({users}, 'programming_rocks', { expiresIn: '2h' })
    res.json({
        token: token
    })
}
// module.exports gør, at vi kan eksportere vores loginController, og anvende det i andre js.filer
module.exports = loginController