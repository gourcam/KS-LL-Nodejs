const express = require('express');
const router = express.Router();

const { User } = require('../models');

router.get('/:id', async (req, res) => {

  const user = await User.findOne(
    {
      where: { id: req.params.id } 
    }
  );
  
  if(user) {
    res.send(user);
  } else {
    res.status(404).send('Not Found');
  }
});


router.get('/', async (req, res) => {  
  
  const users = await User.findAll( {
    attributes: ['firstName', 'age']
  });

  res.send(users);
});

router.post('/', async (req, res) => {
  const data = req.body;

  await User.create({
    firstName: data.firstName,
    age: data.age
  });

  res.send('Saved!');
});

router.put('/:id', async (req, res) => {
  
  const id = req.params.id;
  const data = req.body;

  const user = await User.findByPk(id);

  if(!user) {
    res.status(404).send('User Not Found!');
  }

  user.firstName = data.firstName;
  user.age = data.age;

  await user.save();
  
  
    // await User.update({
    //   firstName: data.firstName,
    //   age: data.age
    // }, {
    //   where: {id : id}
    // });
  


  res.send('Updated!');
});

router.delete('/:id', async (req, res) => {

  const id = req.params.id;

  const result = await User.destroy({
    where: {
      id: id
    }
  });

  if(result === 1) {
    res.send('deleted!');
  } else {
    res.status(404).send('Not Found!');
  }
});


module.exports = router;
