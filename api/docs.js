export default function handler(req, res) {
    if (req.method === 'GET') {
      res.json({
        name: "flattenJSON",
        description: "Flattens a nested JSON object into a single-level object with dot-separated keys.",
        input: {
          type: "object",
          description: "The nested JSON object to flatten.",
          example: {
            nested: {
              key: "value",
              another: {
                key: "another value",
              },
            },
          },
        },
        output: {
          type: "object",
          description: "The flattened JSON object.",
          example: {
            "nested.key": "value",
            "nested.another.key": "another value",
          },
        },
      });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  