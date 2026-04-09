const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Handle root route explicitly for Vercel
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

// Export the Express API for Vercel
module.exports = app;
