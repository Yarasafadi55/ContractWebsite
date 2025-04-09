const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.post('/analyze', async (req, res) => {
  const { base64 } = req.body;

  try {
    const response = await axios.post(
      `${process.env.AZURE_ENDPOINT}/documentintelligence/documentModels/prebuilt-invoice:analyze?api-version=2024-07-31-preview`,
      {
        base64Source: {
          content: base64
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
