export default function handler(req, res) {
  const { key } = req.query;

  // Daftar token yang valid (bisa lu sambung ke DB nanti)
  const validTokens = {
    "ABC123": "Rio Rustandi",
    "DEF456": "VePon Kunn",
    "GTA999": "DevTester"
  };

  if (validTokens[key]) {
    res.status(200).json({
      valid: true,
      username: validTokens[key]
    });
  } else {
    res.status(200).json({
      valid: false
    });
  }
}
