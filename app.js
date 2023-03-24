const express = require('express');
const port = 5656;
const app = express();
const bodyParser = require('body-parser')
const registerRouter = require('./routers/register.js')
const loginRouter = require('./routers/login.js')


app.use(bodyParser.json());
app.use('/register', registerRouter)
app.use('/login',loginRouter)


app.get('/', (req, res) => {
    res.send('Omerha Oved!')
});



app.listen(port, () => { console.log(`server is listening on port ${port}`) });

