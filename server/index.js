const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router')

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
//formats our req.body defaults to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

// app.get('/name', (req, res) => {
//     res.send('jeremy');
//   });
  
app.listen(port, () => {console.log(`Shortly is listening on ${port}`)});
