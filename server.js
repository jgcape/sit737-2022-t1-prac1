var express = require('express')
const serverStartTime = new Date();
var app = express()
// Respond with "The time and a note of when the server was accessed when a GET request is made.
app.get('/', function (req, res) {
    const timeNow = new Date();
    res.send('Hello user!<br><br>'
        + '[Server Activity]: Server started at: ' + serverStartTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric',hour12: true })
        + '<br><br>[Server Activity]: Server accessed at: ' + timeNow.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric',hour12: true }))
})

// Makes the server listen to port 3000.

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
