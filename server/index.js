import express from "express";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json());

// This endpoint lets us check the server before adding chat features.
app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    mode: process.env.APP_MODE || "demo"
  });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});