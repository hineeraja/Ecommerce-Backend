const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
try{
  const tagData = await Tag.findAll({include: [Product]})
  res.status(200).json(tagData);
} catch(err){
  res.status(500).json(err);
} 
});


router.get('/:id',async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data

try {
  const tagData = await Tag.findByPk(req.params.id,{
    include: [Product]
  });
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

router.post('/', async(req, res) => {
  // create a new tag
  
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
   } catch (err) {
    res.status(500).json(err);
    }
  });


router.put('/:id',async(req, res) => {

try {
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.status(200).json(tagData);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete('/:id',async (req, res) => {
  try {
    const tagData = await tagData.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
