const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/time/ip', async (req, res) => {
    try {
        const response = await axios.get('http://worldtimeapi.org/api/ip');

        const { datetime, timezone } = response.data;

        res.send({ datetime, timezone });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch time' });
    }
});


const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

module.exports = app;