
// require funktionen tillader at vi kan hente data fra andre JS-filer
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // vi henviser til port her. Hvis ikke den kan finde en port i console.log, bruger den 3000
app.listen(port, () => console.log(`Listening on port ${port}...`)); 

app.use(cors());

// her definerer vi vores tre variabler, som skal indgå i vores Token authorization. Funktionerne henter de eksporterede moduler fra hver fil
const userController = require("../Godkendelsesopgave3server/userController")
const protectedController = require('../Godkendelsesopgave3server/Protectedcontroller')
const loginController = require('../Godkendelsesopgave3server/logincontroller')

//henter middleware
const ensureToken = require("../Godkendelsesopgave3server/Middleware/ensureToken");
const ArrayUser = require("../Godkendelsesopgave3server/UserData");

app.get("/", userController);
app.get("/protect", ensureToken, protectedController);
app.post("/login", loginController);


// GET REQUEST = User // GET/read bruges til at læse ressourcer i vores REST-enviroment. GET request ændrer aldrig på informationen, men henter den blot
app.get('/users', (req, res) => { // denne skal bruges til User
    res.send(ArrayUser);
});
// POST REQUEST = User // POST/create bruges til at oprette en ressource i vores REST-enviroment
app.post('/users', (req, res) => { 
    res.send('Post request received');
});

// PUT REQUEST = User // PUT/update bruges til at opdatere en ressource i vores REST-enviroment, og leder efter modifikationer
app.put('/users', (req, res) => { // denne skal bruges til User
    res.send('Put request received');
});

// DELETE REQUEST = User // Delete bruges til at fjerne en ressource fra vores system
app.delete('/users', (req, res) => { // denne skal bruges til User
    res.send('Delete request received');
});

// GET REQUEST = Interest GET/read bruges til at læse ressourcer i vores REST-enviroment. GET request ændrer aldrig på informationen, men henter den blot
app.get('/users/Interest', (req, res) => { // denne skal bruges til Interest // get ('/') refererer til vores URL/hjemmeside
    res.send("User1: " + newuser1.Interest + " User2: " + newuser2.Interest);

});

// POST REQUEST = Interest POST/create bruges til at oprette en ressource i vores REST-enviroment
app.post('/users/Interest', (req, res) => { // denne skal bruges til Interest 
    res.send('Post request received');
});

// PUT REQUEST = Interest PUT/update bruges til at opdatere en ressource i vores REST-enviroment, og leder efter modifikationer
app.put('/users/Interest', (req, res) => { // denne skal bruges til Interest 
});

// DELETE REQUEST = Interest // Delete bruges til at fjerne en ressource fra vores system
app.delete('/users/Interest', (req, res) => { // denne skal bruges til Interest 
    res.send('Delete request received');
});

// GET REQUEST = Matches GET/read bruges til at læse ressourcer i vores REST-enviroment. GET request ændrer aldrig på informationen, men henter den blot
app.get('/users/Match', (req, res) => { // denne skal bruges til Matches
    res.send("User1: " + newuser1.Match + " User2: " + newuser2.Match);
});

// POST REQUEST = Matches POST/create bruges til at oprette en ressource i vores REST-enviroment
app.post('/users/Match', (req, res) => { // denne skal bruges til Matches
    res.send('Post request received');
});

// PUT REQUEST = Matches PUT/update bruges til at opdatere en ressource i vores REST-enviroment, og leder efter modifikationer
app.put('/users/Match', (req, res) => { // denne skal bruges til Matches
    res.send('Put request received');
});

// DELETE REQUEST = Matches // Delete bruges til at fjerne en ressource fra vores system
app.delete('/users/Match', (req, res) => { // denne skal bruges til Matches
    res.send('Delete request received');
});

