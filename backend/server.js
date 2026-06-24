const express = require('express');
const cors = require('cors');

const products = require('./data/products');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  res.json(product);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
