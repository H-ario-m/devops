const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
