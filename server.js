const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ methods: ['GET', 'POST'] }));
app.use(express.static(__dirname));

let scanCount = 0;
const hourlyScans = {};

app.get('/count', (req, res) => {
    const currentHour = new Date().toISOString().slice(0, 13);
    hourlyScans[currentHour] = (hourlyScans[currentHour] || 0) + 1;
    res.json({ total: ++scanCount, hourlyData: hourlyScans });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
