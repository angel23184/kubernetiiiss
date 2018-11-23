const express = require('express');
const _ = require('lodash');
const app = express();

const ta = _.sample(['Giorgio','Gabi','Juan','Teo','Diego'])
app.get('/',(req,res) => res.json({selectedTa:ta}))


const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Ready on port ${port}`));