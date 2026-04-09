const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

app.post('/api/parse', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const lines = text.split('\n').filter(line => line.trim() !== '');
    const result = [];

    lines.forEach(line => {
        // mode，n. 模式/方法，切换状态，I need to switch to silent mode.，我需要切换到静音模式。
        const parts = line.split('，').map(part => part.trim());
        if (parts.length >= 5) {
            result.push({
                word: parts[0],
                meaning: parts[1],
                context: parts[2],
                sentence: parts[3],
                translation: parts[4]
            });
        }
    });

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
