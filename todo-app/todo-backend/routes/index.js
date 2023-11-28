const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')


/* GET index data. */
router.get('/', async (req, res) => {
  let visits = await redis.getAsync('visits')

  if(visits === null) {
    await redis.setAsync('visits', 1 )
    visits = 1
  } else {
    visits++
    await redis.setAsync('visits', visits )
  }

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  let added_todos = await redis.getAsync('added_todos')

  if(added_todos === null) {
    added_todos = 0
  }
  res.send({
    added_todos: parseInt(added_todos)
  })
})


module.exports = router;
