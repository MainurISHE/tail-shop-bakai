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

app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[product.length - 1].i + 1 : 1,
    ...req.body,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const id = Number(res.params.id);

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  products[index] = {
    ...products[index],
    ...req.body,
    id,
  };

  res.json(products[index]);
});

app.delete('/products/:id', (req, res) => {
  const id = Number(res.params.id);

  const index = products.findIndex((product) => product.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.json(deletedProduct[0]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
