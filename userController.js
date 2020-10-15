// require funktionen tillader at vi kan hente data fra andre JS-filer
const users = require('../Godkendelsesopgave3server/UserData')


//controller
function userController(req, res) {
    res.json(users)
}


// module.exports gør, at vi kan eksportere vores userController, og anvende det i andre js.filer
module.exports = userController;