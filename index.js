const express = require('express');

const app = express();
const PORT = 5000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory (optional if you use the default 'views' folder)
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('home'); // This will render 'views/home.ejs'
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
