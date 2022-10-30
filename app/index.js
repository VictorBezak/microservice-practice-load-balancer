const app = require("express")();
const appId = process.env.APP_ID;


app.get("/", (req, res) =>
res.send(`app id: ${appId}\nHello from the home page!`));

app.get("/about", (req, res) =>
res.send(`app id: ${appId}\nHello from the about page!`));

app.get("/contact", (req, res) =>
res.send(`app id: ${appId}\nHello from the contact page!`));

app.get("/data", (req, res) =>
res.send(`app id: ${appId}\nHello from the data page!`));


app.listen(appId, () => console.log(`${appId} is listening on port ${appId}`));