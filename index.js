const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Flatten JSON function
const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object' || obj[key] === null) {
      res[extraKey + key] = obj[key];
    } else {
      flattenJSON(obj[key], res, `${extraKey}${key}.`);
    }
  }
  return res;
};

// POST endpoint for flattenJSON
app.post('/functions/flattenJSON', (req, res) => {
  try {
    const { input } = req.body;
    if (!input || typeof input !== 'object') {
      return res.status(400).send({ error: 'Invalid input. Must be a JSON object.' });
    }
    const output = flattenJSON(input);
    res.send({ output });
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while processing your request.' });
  }
});

// GET endpoint for function documentation
app.get('/functions/flattenJSON', (req, res) => {
  res.json({
    name: 'flattenJSON',
    description: 'Flattens a nested JSON object into a single-level object with dot-separated keys.',
    input: {
      type: 'object',
      description: 'A nested JSON object to be flattened.',
      example: { a: { b: { c: 1 } } },
    },
    output: {
      type: 'object',
      description: 'A flattened JSON object with dot-separated keys.',
      example: { 'a.b.c': 1 },
    },
  });
});

module.exports = app;
