const express = require ('express');
const app = express();
const items = require ('./Items');

app.get ('/api/items', (req, res) => {
    res.json(items);
});
app.listen(3000, () => {
    console.log (`It's working`);
});