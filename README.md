```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.arguments(express.static("public"));

// home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server!</h1>");
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
