const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('views/public'));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})