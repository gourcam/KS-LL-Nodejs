var express = require('express')
var app = express();

app.use(express.json());  

const indexRouter = require('./controller/index')
app.use('/', indexRouter);

const userRouter = require('./controller/users')
app.use('/users', userRouter);


const db = require('./models');

db.sequelize.sync({force:false}).then(() => {    
    console.log("Synced db.");
  })
  .catch((err) => {    
    console.log("Failed to sync db: " + err.message);
  });



app.listen(8080, () => {
    console.log('Server running!');
});
