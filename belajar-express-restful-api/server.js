// ini tempat buat jalanin server-nya
const app = require("./app");
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
