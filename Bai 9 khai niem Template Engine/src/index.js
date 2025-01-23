const express = require('express');
const morgan = reqiure('morgan');
const handlebars = reqiure('express-handlebars');
const app = express();
const port = 3000


app.use(morgan('combined'));

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('view', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})