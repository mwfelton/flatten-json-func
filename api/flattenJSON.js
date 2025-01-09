export default async (req, res) => {
    if (req.method === 'POST') {
      const { input } = req.body;
      if (!input) {
        return res.status(400).json({ error: 'Input is required' });
      }
  
      const flattenJSON = (obj = {}, res = {}, extraKey = '') => {
        for (let key in obj) {
          if (typeof obj[key] !== 'object') {
            res[extraKey + key] = obj[key];
          } else {
            flattenJSON(obj[key], res, `${extraKey}${key}.`);
          }
        }
        return res;
      };
  
      const output = flattenJSON(input);
      res.status(200).json({ output });
    } else if (req.method === 'GET') {
      res.status(200).json({
        name: 'flattenJSON',
        description: 'Flattens a nested JSON object into a single-level object with dot-separated keys.',
        input: {
          type: 'object',
          description: 'A nested JSON object to flatten',
          example: {
            a: { b: { c: 1 } },
            x: 2
          }
        },
        output: {
          type: 'object',
          description: 'A flattened JSON object',
          example: {
            'a.b.c': 1,
            x: 2
          }
        }
      });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  };
  