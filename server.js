const express = require('express');
const app = express();
const PORT = 3000;

const orders = [];
app.use(express.static('public'));

// home route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to My Express Server!</h1>");
});

app.get("/create-mad-libs", (req, res) => {
    const pnPass = req.query.pn;
    const n1Pass = req.query.n1;
    const n2Pass = req.query.n2;
    const sPass = req.query.s;
    const vPass = req.query.v;

    console.log(pnPass);
    console.log(n1Pass);
    console.log(n2Pass);
    console.log(sPass);
    console.log(vPass);

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
                    1. Keep two <b>${pnPass}</b> on the steering wheel at all times.<br><br>
                    2. Step on the <b>${n1Pass}</b> to speed up and the <b>${n2Pass}</b> to slow down.<br><br>
                    3. Your parents will just LOVE it if you play <b>&quot;${sPass}&quot;</b> on the radio.<br><br>
                    4. Make sure to honk your horn when you see <b>${vPass}</b> on a street sign
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
