const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "10mb" }));

app.post("/analyze", async (req, res) => {
    const { base64Source } = req.body;
    // Forward it to Azure Document Intelligence here (code to be added later)
    res.json({ message: "Received base64 data!", size: base64Source?.length });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
"Add server/index.js"\
