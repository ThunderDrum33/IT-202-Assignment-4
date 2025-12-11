const express = require('express');
const cors = require('cors');
const products = require('./products.json');
const app = express();
app.use(cors());
app.use(express.json());

let lastSelectedProduct = null;

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/select-product', (req, res) => {
  const { productId } = req.body;
  const found = products.find(p => p.id === productId);
  if (!found) {
    return res.status(404).json({ error: "Product not real. It's not here, sorry." });
  }
  lastSelectedProduct = found;
  res.json({ message: 'Product selected', product: found });
});

app.get('/api/selected-product', (req, res) => {
  if (!lastSelectedProduct) {
    return res.status(404).json({ error: "Nothing selected. Why're you here?" });
  }
  res.json(lastSelectedProduct);
});

app.post('/api/submit-order', (req, res) => {
  res.json({ message: 'Await delivery. Thank you! :)' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));