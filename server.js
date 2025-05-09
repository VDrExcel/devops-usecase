const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route für Hello World
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Nur beim direkten Ausführen starten
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
  });
}

// Export für Tests
module.exports = app;
