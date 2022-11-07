require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index')
const cors = require('cors')

//29-00
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', require('./user/router'));


const start = async () => {
  try{
    await sequelize.authenticate(); // connect to db
    await sequelize.sync({ force: true }); //сверяет состояние бд со схемой бд
    app.listen(PORT, (req, res) => {console.log('server has started', {PORT})}
    )
  } catch (e){
      console.log('something went wrong', e)
  }
};

start();