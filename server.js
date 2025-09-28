const express = require('express');
const app = express();
const PORT = 3000;

// const orders = [];

app.use(express.static('public'));

// home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server!</h1>");
});

app.get("/create-mad-libs", (req, res) => {
    const properNoun = req.query.pn;
    const noun1 = req.query.n1;
    const noun2 = req.query.n2;
    const song = req.query.s;
    const verb = req.query.v;

    console.log(properNoun);
    console.log(noun1);
    console.log(noun2);
    console.log(song);
    console.log(verb);

    let output = `
        <!doctype html>
        <html lang='en'>

        <head>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB' crossorigin='anonymous'>
        </head>

        <body>
        <div id="mainDiv" class="container-sm mt-3 p-5 bg-primary text-white">
            <div id='resultContainer' class='fs-3'>
                <div id='resultDiv'>
                    Learning to drive is a tricky process. There are a few rules you must follow.<br><br>
                    1. Keep two <b>${properNoun}</b> on the steering wheel at all times.<br><br>
                    2. Step on the <b>${noun1}</b> to speed up and the <b>${noun2}</b> to slow down.<br><br>
                    3. Your parents will just LOVE it if you play <b>&quot;${song}&quot;</b> on the radio.<br><br>
                    4. Make sure to honk your horn when you see <b>${verb}</b> on a street sign
                </div>

                <div class='text-center mt-4'>
                    <form id="myForm" action="mad-libs-form.html" method="get">
                        <button id='resetButton' type='submit' class='btn btn-danger myButton'>Start Again</button>
                    </form>
                </div>
            </div>
        </div>
        </body>

        </html>
        `
    res.send(output);
});

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
